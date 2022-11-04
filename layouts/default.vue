<template>
  <div>
    <nav class="menu general-padding">
      <ul>
        <li>
          <NuxtLink to="/">Калькулятор</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/rate">Курс рубля</NuxtLink>
        </li>
      </ul>
    </nav>
    <main class="page-container general-padding">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: mapActions(['fetchCurrenciesData']),
  created () {
    this.fetchCurrenciesData();
  }
}
</script>

<style lang="scss">
html {
  @apply text-16;
}

body {
  @apply
    m-0
    overflow-x-hidden
    font-roboto text-text-main
  ;
  // font-size: 1.4rem;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.general-padding {
  @apply px-4 md:px-8 xl:px-14 2xl:px-20;
}

nav.menu {
  @apply bg-gray;

  ul {
    @apply
      py-4
      flex justify-start
      list-none select-none
    ;
  }

  li {
    @apply
      inline
      mr-6
      leading-4
      text-12 font-medium
      text-text-gray-500
    ;
  }

  a.nuxt-link-exact-active {
    @apply text-text-gray-700;
  }
}

.page-container {
  @apply pt-5 xl:pt-8 2xl:pt-9;
}
</style>
