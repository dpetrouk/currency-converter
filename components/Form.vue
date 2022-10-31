<template>
    <div>
      <div class="input-groups">
        <InputGroup
          label="Валюта 1"
          placeholder="Введите название или код"
        />
        <InputGroup
          label="Валюта 2"
          placeholder="Введите название или код"
        />
        <InputGroup
          label="Количество"
          placeholder="Введите число"
        />
      </div>
      <div class="result-container">
        <div class="info-icon">
          <img src="../assets/images/info-sign-red.svg" />
        </div>
        <span class="result-text">Итого: 1234</span>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.input-groups {
  @apply
    grid grid-cols-1 grid-rows-3
    gap-5 xl:gap-6
  ;
}

.result-container {
  @apply
    mt-5 xl:mt-6
    p-5 md:p-6 xl:p-7 2xl:p-8
    rounded-2xl
    flex justify-start
    bg-secondary
  ;
}

.info-icon {
  @apply
    w-10 xl:w-12 2xl:w-13
    select-none
  ;
}

.result-text {
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