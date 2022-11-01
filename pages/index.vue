<template>
    <div>
      <Header text="Валютный калькулятор" />
      <div class="page-body">
        <Form />
        <Card/>
      </div>
      <ContactsBig />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.page-body {
  @apply
    mt-5 xl:mt-8 2xl:mt-9
    grid
    grid-cols-1 grid-rows-auto-2
    md:grid-cols-2 md:grid-rows-1
    gap-y-5 md:gap-y-0
    gap-x-0 md:gap-x-6 xl:gap-x-10
  ;
}
</style>
