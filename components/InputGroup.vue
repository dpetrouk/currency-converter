<template>
  <div>
    <label class="label">{{ label }}</label>
    <input
      type="text"
      class="input"
      :placeholder="placeholder"
      :value="value"
      @input="onChange($event)"
      @focus="onFocus" @blur="onBlur"
      @keydown.down="onArrowDown" @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    />
    <ul
      v-show="isOpen"
      class="autocomplete-results"
    >
      <li
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-item"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['value', 'items', 'label', 'placeholder', 'type'],
  data() {
    return {
      results: [],
      isOpen: false,
      arrowCounter: -1,
    };
  },
  methods: {
    onFocus() {
      if (this.items) {
        this.isOpen = true;
        this.results = this.items;
      }
    },
    onBlur() {
      setTimeout(() => this.isOpen = false, 150);
    },
    onChange(event) {
      this.$emit('input', event.target.value);

      if (this.items) {
        if (this.type === 'currency') {
          this.filterResults();
        }
        this.isOpen = true;
      }
    },
    filterResults() {
      this.results = this.items
        .filter((item) => item.toLowerCase().indexOf(this.value.toLowerCase()) > -1);
    },
    sliceCurrencyCode(result) {
      return result.split(' ')[0];
    },
    setResult(result) {
      if (this.type === 'amount') {
        this.$emit('input', result);
      } else {
        const currencyCode = this.sliceCurrencyCode(result);
        this.$emit('input', currencyCode);
      }
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length - 1) {
        this.arrowCounter = this.arrowCounter + 1;
      } else {
        this.arrowCounter = 0;
      }
      this.itemView(this.$el.getElementsByClassName('autocomplete-item')[this.arrowCounter])
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      } else {
        this.arrowCounter = this.results.length - 1;
      }
      this.itemView(this.$el.getElementsByClassName('autocomplete-item')[this.arrowCounter])
    },
    onEnter() {
      this.setResult(this.results[this.arrowCounter]);
    },
    itemView (item) {
      if (item && item.scrollIntoView) {
        item.scrollIntoView(false)
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
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

.autocomplete-results {
  @apply
    absolute
    m-0 p-0
    h-auto
    max-h-48
    border-b border-l border-r rounded-md border-gainsboro
    ring-4 ring-opacity-50
    ring-secondary
    overflow-auto
  ;
}

.autocomplete-item {
  @apply
    py-3 xl:py-4
    px-4 xl:px-5
    text-left
    leading-4
    text-12 2xl:text-14
    list-none
    cursor-pointer
    bg-white
    select-none
  ;
}

.autocomplete-item.is-active, .autocomplete-item:hover {
  @apply text-catalina-blue bg-gray;
}
</style>
