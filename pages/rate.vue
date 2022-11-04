<template>
  <div>
    <Header text="Курс рубля" />
    <ul :class="$style['currency-cards']">
      <CurrencyCard
        v-for="(currency, i) in firstThreeCurrencies"
        :key="i"
        :currency="currency"
        :id="i"
      />
    </ul>
    <ContactsSmall />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['firstThreeCurrencies'])
  }
}
</script>

<style lang="scss" module>
.currency-cards {
  @apply
    mt-5 xl:mt-20 2xl:mt-9
    grid
    grid-cols-1 md:grid-cols-2 xl:grid-cols-3
    grid-rows-3 md:grid-rows-2 xl:grid-rows-1
    gap-y-5 md:gap-6 xl:gap-y-8
  ;
}
</style>
