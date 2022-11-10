export const state = () => ({
  currencies: {}
});

export const getters = {
  getValueOfCurrencyInRUB: (state) => (currencyCode) => {
    const currency = state.currencies[currencyCode];
    if (!currency) {
      return;
    }
    const valueOfCurrencyInRUB = currency.value / currency.nominal;
    return valueOfCurrencyInRUB;
  },
  hasCurrencyCode: (state) => (value) => !!(state.currencies[value]),
  currenciesCodes(state) {
    const codes = Object.keys(state.currencies);
    return codes;
  },
  currenciesCodesAndNames(state, getters) {
    const codeAndNameStrings = getters.currenciesCodes.map((code) => `${code} - ${state.currencies[code].nameSingular}`);
    return codeAndNameStrings;
  },
  firstThreeCurrencies(state, getters) {
    const result = getters.currenciesCodes
      .map((code) => state.currencies[code])
      .filter((currency, i) => i < 3);
    return result;
  }
};

export const mutations = {
  updateCurrencies(state, currencies) {
    state.currencies = currencies;
  },
};

const proxify = (feed) => {
  const proxy = new URL('https://allorigins.hexlet.app/raw?disableCache=true&url=');
  proxy.searchParams.set('url', feed);
  return proxy.toString();
};

const namesMapping = {
  "Армянских драмов": "Армянский драм",
  "Венгерских форинтов": "Венгерский форинт",
  "Гонконгских долларов": "Гонконгский доллар",
  "Датских крон": "Датская крона",
  "Индийских рупий": "Индийская рупия",
  "Казахстанских тенге": "Казахстанский тенге",
  "Киргизских сомов": "Киргизский сом",
  "Китайских юаней": "Китайский юань",
  "Молдавских леев": "Молдавский лей",
  "Норвежских крон": "Норвежская крона",
  "Таджикских сомони": "Таджикский сомони",
  "Турецких лир": "Турецкая лира",
  "Узбекских сумов": "Узбекский сум",
  "Украинских гривен": "Украинская гривна",
  "Чешских крон": "Чешская крона",
  "Шведских крон": "Шведская крона",
  "Южноафриканских рэндов": "Южноафриканский рэнд",
  "Японских иен": "Японская иена",
};

const getSingularFormOfName = (name) => namesMapping[name] || name;

const prepareInitialData = (currencies) => {
  const keys = Object.keys(currencies);
  const result = {};
  for (const key of keys) {
    const { CharCode, Nominal, Name, Value } = currencies[key];
    result[key] = {
      charCode: CharCode,
      name: Name,
      nameSingular: getSingularFormOfName(Name),
      value: Value,
      nominal: Nominal
    };
  }

  return result;
};

export const actions = {
  // async nuxtServerInit ({ commit }) {
  //   const { Valute } = await this.$axios.$get('https://www.cbr-xml-daily.ru/daily_json.js');
  //   commit('updateCurrencies', Valute);
  // }
  async fetchCurrenciesData({ commit }) {
    // If nuxt.config.js target is static (which is required for github-pages deployment)
    const link = 'https://www.cbr-xml-daily.ru/daily_json.js';
    const proxifiedLink = proxify(link);
    const res = await this.$axios.$get(proxifiedLink);
    const data = prepareInitialData(res.Valute);
    commit('updateCurrencies', data);
  }
};
