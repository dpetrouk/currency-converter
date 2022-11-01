<template>
  <ul
    class="currencies-list"
  >
    <CurrencyCard
      v-for="(currencyItem, i) in firstThreeCurrencies"
      :key="i"
      :currency-item="currencyItem"
      :id="i"
    />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['firstThreeCurrencies'])
  }
}
</script>

<style lang="scss">
.currencies-list {
  @apply
    mt-5 xl:mt-20 2xl:mt-9
    grid
    grid-cols-1 md:grid-cols-2 xl:grid-cols-3
    grid-rows-3 md:grid-rows-2 xl:grid-rows-1
    gap-y-5 md:gap-6 xl:gap-y-8
  ;
}
</style>