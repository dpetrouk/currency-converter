<template>
  <div :class="$style['contacts-small']">
    <img :id="$style['icon-info']" src="../assets/images/icon-info-blue.svg" />
    <div :id="$style.contacts">
      Телефон: <a href="tel:88007759028">8 (800) 775-90-28</a>, email: <a href="mailto:info@example.ru">info@example.ru</a>.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
.contacts-small {
  @apply
    mt-5 md:mt-6 xl:mt-8
    mb-36 md:mb-16 xl:mb-32 2xl:mb-24
    p-6 xl:p-7 2xl:p-8
    rounded-2xl
    bg-gray
  ;
}

#icon-info {
  @apply
    inline-block
    h-10 xl:h-12 2xl:h-13
  ;
}

#contacts {
  @apply
    inline-block
    mt-5 md:mt-0
    md:ml-5 xl:ml-6 2xl:ml-7
    leading-5 xl:leading-6
    text-18 xl:text-20
    font-medium
    text-primary
}
</style>