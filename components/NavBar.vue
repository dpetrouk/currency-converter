<template>
  <nav>
    <ul class="flex">
      <li>
        <NuxtLink to="/">Калькулятор</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/exchangeRate">Курс рубля</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
nav {
    background-color: #F8F8F8;
}

a {
  color: #666666;
}

a.nuxt-link-exact-active {
  color: #343434;
}

ul {
  margin: 0 0 0 5%;
  
  list-style: none;
}

li {
    @apply font-roboto text-text-main;
    display: inline;
    /* margin: 2%; */
    padding: 2%;
    /* margin-left: 5%; */
}
</style>