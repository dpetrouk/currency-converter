<template>
  <div>
    <label class="label">{{ label }}</label>
    <input
      type="text"
      class="input"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
    props: ['label', 'placeholder']
}
</script>

<style lang="scss">
.label {
    @apply
      block
      leading-4 2xl:leading-5
      text-14 2xl:text-16
      font-medium
      text-text-dark
    ;
}

.input {
    @apply
      mt-2
      py-3 xl:py-4
      px-4 xl:px-5
      w-full
      border rounded
      border-gainsboro
      leading-4
      text-12 2xl:text-14
    ;
}
.input:focus {
    @apply
      outline-none
      border-primary
      ring-4 ring-opacity-50
      ring-secondary
    ;
}
</style>
