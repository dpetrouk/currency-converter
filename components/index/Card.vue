<template>
  <div :class="$style['card-container']">
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:</h2>
      <div :class="$style['card-body']">
        <div :class="$style['card-list']">
          <ul>
            <li><span>Incididunt ut labore et dolore magna aliqua</span></li>
            <li><span>Incididunt ut labore et</span></li>
            <li><span>Incididunt ut labore et dolore</span></li>
            <li><span>Labore et dolore</span></li>
            <li><span>Incididunt ut</span></li>
            <li><span>Incididunt ut labore et dolore</span></li>
            <li><span>Incididunt ut labore</span></li>
          </ul>
        </div>
        <div :class="$style['card-images']">
          <img :class="{ [$style['img-item']]: true, [$style['img-item-1']]: true }" alt="" src="~/assets/images/img-1.jpg"/>
          <img :class="{ [$style['img-item']]: true, [$style['img-item-2']]: true }" alt="" src="~/assets/images/img-2.jpg"/>
          <img :class="{ [$style['img-item']]: true, [$style['img-item-3']]: true }" alt="" src="~/assets/images/img-3.jpg"/>
          <img :class="{ [$style['img-item']]: true, [$style['img-item-4']]: true }" alt="" src="~/assets/images/img-4.jpg"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module>
.card-container {
  @apply
    self-start
    p-5 xl:p-6 2xl:p-8
    border rounded-2xl border-azureish-white
    bg-secondary;

  h2 {
    @apply
      leading-4.5 xl:leading-5 2xl:leading-6
      text-13 xl:text-15 2xl:text-18
      uppercase font-medium
      text-primary;
  }
}

.card-body {
  @apply
    mt-6 xl:mt-8 2xl:mt-10
    grid
    grid-cols-1 md:grid-cols-fr-auto
    grid-rows-fr-auto md:grid-rows-1
    gap-y-6 md:gap-y-0
    gap-x-0 md:gap-x-5 xl:gap-x-6 2xl:gap-x-8
  ;
}

.card-list {
  ul {
    @apply
      flex flex-col justify-between
      space-y-4 2xl:space-y-5
    ;
  }

  ul li {
    @apply
      pl-4 2xl:pl-6
      bg-8 2xl:bg-10
      leading-4 2xl:leading-5
      text-13 xl:text-14 2xl:text-18
      font-normal
      text-text-main
    ;
    background: url("~/assets/images/list-bullet-circle-red.svg") no-repeat left center;
  }
}

.card-images {
  @apply
    grid
    grid-cols-4 md:grid-cols-1 xl:grid-cols-2
    grid-rows-1 md:grid-rows-4 xl:grid-rows-2
    gap-y-0 md:gap-y-2 xl:gap-3 2xl:gap-4
    gap-x-2 md:gap-x-0
  ;
}

.img-item {
  @apply
    w-16 md:w-22 xl:w-29 2xl:w-36
    h-10.5 md:h-14 xl:h-29 2xl:h-36
    rounded-md
    object-cover
    select-none
  ;
}

.img-item-1 {
  @apply
    rounded-tr-2.25xl
    rounded-bl-2.25xl
    xl:rounded-md
  ;
}

.img-item-2 {
  @apply
    rounded-tl-2.25xl xl:rounded-tl-md
    rounded-br-2.25xl xl:rounded-br-md
    xl:rounded-tr-4xl
  ;
}

.img-item-3 {
  @apply
    rounded-tr-2.25xl xl:rounded-tr-md
    rounded-bl-2.25xl xl:rounded-bl-4xl
  ;
}

.img-item-4 {
  @apply
    rounded-tl-2.25xl
    rounded-br-2.25xl
    xl:rounded-md
  ;
}
</style>