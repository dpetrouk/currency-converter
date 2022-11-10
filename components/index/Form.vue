<template>
    <div>
      <div :class="$style['input-groups']">
        <InputGroup
          label="Валюта 1"
          placeholder="Введите название или код"
          :options="currenciesCodesAndNames"
          v-model="nameOfInitialCurrency"
          @input="onChange"
        />
        <InputGroup
          label="Валюта 2"
          placeholder="Введите название или код"
          :options="currenciesCodesAndNames"
          v-model="nameOfFinalCurrency"
          @input="onChange"
        />
        <InputGroup
          label="Количество"
          placeholder="Введите число"
          :options="amountOptions"
          v-model="amountInInitialCurrency"
          @input="onChange"
        />
      </div>
      <div :id="$style['result-container']">
        <img :id="$style['info-icon']" src="~/assets/images/icon-info-red.svg" />
        <span :id="$style['result-text']">
          Итого: {{ result }}
        </span>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      nameOfInitialCurrency: '',
      nameOfFinalCurrency: '',
      amountInInitialCurrency: '',
      amountInFinalCurrency: '',
      amountOptions: [100,50,25,10,5,1]
    };
  },
  computed: {
    ...mapGetters(['currenciesCodesAndNames']),
    codeOfInitialCurrency() {
      return this.getCurrencyCodeFromMixedString(this.nameOfInitialCurrency);
    },
    codeOfFinalCurrency() {
      return this.getCurrencyCodeFromMixedString(this.nameOfFinalCurrency);
    },
    areFieldsEmpty() {
      const isField1Empty = this.codeOfInitialCurrency.length === 0;
      const isField2Empty = this.codeOfFinalCurrency.length === 0;
      const isAmountEmpty = this.amountInInitialCurrency.length === 0;
      return isField1Empty || isField2Empty || isAmountEmpty;
    },
    result() {
      if (!this.areFieldsEmpty) {
        const initialCurrency = `${this.amountInInitialCurrency} ${this.codeOfInitialCurrency}`;
        const finalCurrency = `${this.amountInFinalCurrency} ${this.codeOfFinalCurrency}`;
        return `${initialCurrency} = ${finalCurrency}`;
      }
      return '';
    }
  },
  methods: {
    getCurrencyCodeFromMixedString(currencyCodeAndName) {
      const value = currencyCodeAndName.split(' -')[0];
      return this.$store.getters.hasCurrencyCode(value) ? value : '';
    },
    getValueOfCurrencyInRUB(currencyCode) {
      return this.$store.getters.getValueOfCurrencyInRUB(currencyCode);
    },
    roundUpToTwoDecimals(value) {
      return Math.round(value * 100) / 100;
    },
    onChange() {
      const valueOfInitialCurrencyInRUB = this.getValueOfCurrencyInRUB(this.codeOfInitialCurrency);
      const valueOfFinalCurrencyInRUB = this.getValueOfCurrencyInRUB(this.codeOfFinalCurrency);

      const amountOfInitialCurrencyInRUB = valueOfInitialCurrencyInRUB * this.amountInInitialCurrency;

      const amountInFinalCurrency = this.roundUpToTwoDecimals(amountOfInitialCurrencyInRUB / valueOfFinalCurrencyInRUB);

      this.amountInFinalCurrency = amountInFinalCurrency || '';
    }
  }
}
</script>

<style lang="scss" module>
.input-groups {
  @apply
    grid grid-cols-1 grid-rows-3
    gap-5 xl:gap-6
  ;
}

#result-container {
  @apply
    mt-5 xl:mt-6
    p-5 md:p-6 xl:p-7 2xl:p-8
    rounded-2xl
    flex justify-start
    bg-secondary
  ;
}

#info-icon {
  @apply
    w-10 xl:w-12 2xl:w-13
    select-none
  ;
}

#result-text {
  @apply
    inline-block
    ml-5 xl:ml-6 2xl:ml-7
    self-center
    leading-5 xl:leading-6 2xl:leading-7
    text-16 xl:text-20 2xl:text-24
    font-bold
    text-primary
  ;
}
</style>