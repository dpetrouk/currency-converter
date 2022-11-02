export const state = () => ({
  currencies: {}
});

export const getters = {
  getValueOfCurrencyInRUB: (state) => (currencyCode) => {
    const currency = state.currencies[currencyCode];
    if (!currency) {
      return;
    }
    const valueOfCurrencyInRUB = currency.Value / currency.Nominal;
    return valueOfCurrencyInRUB;
  },
  currenciesCodes(state) {
    const codes = Object.keys(state.currencies);
    return codes;
  },
  currenciesCodesAndNames(state, getters) {
    const codeAndNameStrings = getters.currenciesCodes.map((code) => `${code} - ${state.currencies[code].Name}`);
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

export const actions = {
  // async nuxtServerInit ({ commit }) {
  //   const { Valute } = await this.$axios.$get('https://www.cbr-xml-daily.ru/daily_json.js');
  //   commit('updateCurrencies', Valute);
  // }
  async fetchCurrenciesData({ commit }) {
    // If nuxt.config.js target is static (which is required for github-pages deployment)
    const link = 'https://www.cbr-xml-daily.ru/daily_json.js';
    const proxifiedLink = proxify(link);
    const { Valute } = await this.$axios.$get(proxifiedLink);
    commit('updateCurrencies', Valute);
  }
};
