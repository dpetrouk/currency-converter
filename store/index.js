export const state = () => ({
  currencies: {}
});

export const getters = {
  getCurrencyValue: (state) => (currencyCode) => {
    const currency = state.currencies[currencyCode];
    if (!currency) {
      return;
    }
    return currency.Value;
  },
  currenciesCodesAndNames(state) {
    const codes = Object.keys(state.currencies);
    const codeAndNameStrings = codes.map((code) => `${code} - ${state.currencies[code].Name}`);
    return codeAndNameStrings;
  },
  firstThreeCurrencies(state) {
    const result = Object.keys(state.currencies)
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

export const actions = {
  async fetchCurrenciesData({ commit }) {
    const { Valute } = await this.$axios.$get('https://www.cbr-xml-daily.ru/daily_json.js');
    commit('updateCurrencies', Valute);
  }
};
