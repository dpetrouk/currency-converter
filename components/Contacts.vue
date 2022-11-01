<template>
  <div class="contacts-container">
    <div class="contacts-text">
      <h1>Нужна помощь? Мы поможем! Просто свяжитесь с нами.</h1>
      <p>Наши специалисты с радостью ответят на все ваши вопросы и дадут
  профессиональную консультацию по товарам.</p>
    </div>
    <div class="contacts">
      <div id="phone">
        <a href="tel:88007759028">8 (800) 775-90-28</a>
      </div>
      <div id="or">или</div>
      <div id="email">
        <a href="mailto:info@example.ru">info@example.ru</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.contacts-container {
  @apply
    mt-5 md:mt-6 xl:mt-10
    mb-20 md:mb-32 xl:mb-20 2xl:mb-36
    -mx-4 md:-mx-0
    p-6 md:p-7 xl:p-10 2xl:p-12
    rounded-none md:rounded-2xl
    grid
    grid-cols-1 md:grid-cols-2
    grid-rows-2 md:grid-rows-1
    gap-y-4 md:gap-y-0
    gap-x-0 md:gap-x-18 xl:gap-x-26 2xl:gap-x-30
    text-center
    bg-secondary;
}

.contacts-text {
  @apply md:text-left;

  h1 {
    @apply
      leading-6 xl:leading-9 2xl:leading-12
      text-18 xl:text-30 2xl:text-36
      font-medium
      text-catalina-blue
    ;
  }

  p {
    @apply
      mt-1 xl:mt-3 2xl:mt-4
      leading-3 md:leading-3 xl:leading-4 2xl:leading-5
      text-10 md:text-10 xl:text-13 2xl:text-16
      font-normal
      text-text-main
    ;
  }
}

.contacts {
  @apply
    grid
    grid-cols-1 grid-rows-auto-3
    gap-y-3 xl:gap-y-4
  ;
}

#phone {
  @apply
    leading-7 xl:leading-12 2xl:leading-15
    text-24 xl:text-40 2xl:text-52
    font-medium
    text-catalina-blue
  ;
}

#or {
  @apply
    leading-4 xl:leading-6 2xl:leading-7
    text-12 xl:text-18 2xl:text-24
    font-normal
    uppercase
  ;
}

#email {
  @apply
    leading-6 xl:leading-7 2xl:leading-10
    text-20 xl:text-24 2xl:text-32
    tracking-wider
    font-normal
    text-catalina-blue
  ;
}
</style>