<template>
  <h1 class="page-header">{{ text }}</h1>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss">
.page-header {
  @apply
    leading-6 md:leading-8 2xl:leading-10
    text-20 md:text-26 2xl:text-34
    font-medium
  ;
}
</style>