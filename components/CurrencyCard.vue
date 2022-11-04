<template>
  <div :class="$style['currency-card']">
    <div>
      <img
        v-if="isOrderEven()"
        src="../assets/images/icon-money-blue.svg"
        :class="$style['money-sign']"
      />
      <img
        v-else
        src="../assets/images/icon-money-red.svg"
        :class="$style['money-sign']"
      />
      <h2 :class="$style['currency-code']" >{{ currency.charCode }}</h2>
      <p :class="$style['currency-name']">{{ currency.name }}</p>
    </div>
    <ul :class="$style['currency-info']">
      <li>Номинал: {{ currency.nominal }}</li>
      <li>Курс: {{ currency.value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['currency', 'id'],
  methods: {
    isOrderEven() {
      return this.id % 2 === 0;
    }
  }
}
</script>

<style lang="scss" module>
.currency-card {
  @apply
    p-5 xl:p-6 2xl:p-8
    rounded-2xl
    flex flex-col justify-between
    bg-gray
    cursor-pointer
  ;
}

.currency-card:hover {
  @apply shadow-md;
}

.money-sign {
  @apply w-13 xl:w-14 2xl:w-18;
}

.currency-code {
  @apply
    mt-5 xl:mt-6 2xl:mt-8
    leading-5 xl:leading-6
    text-18 xl:text-20
    font-bold
    text-primary
  ;
}

.currency-name {
  @apply
    mt-3
    leading-4 xl:leading-5
    text-14 xl:text-16
    font-normal
    text-text-gray-950
  ;
}

.currency-info {
  @apply
    leading-4 xl:leading-5
    text-14 xl:text-16
    font-medium
    text-text-main
  ;

  li {
    @apply
      mt-3
      pl-6
      bg-10
    ;
    background: url("../assets/images/list-bullet-circle-red.svg") no-repeat left center;
  }
}
</style>