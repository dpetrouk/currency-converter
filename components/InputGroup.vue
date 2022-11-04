<template>
  <div>
    <label :class="$style.label">{{ label }}</label>
    <input
      type="text"
      :class="$style.input"
      :placeholder="placeholder"
      :value="value"
      @input="onChange($event.target.value)"
      @focus="onFocus"
      @keydown.down="onArrowDown" @keydown.up="onArrowUp"
      @keydown.enter="onEnter($event)"
      @keydown.tab="closeSuggestedList"
    />
    <ul
      v-show="isOpen"
      :class="$style['autocomplete-results']"
    >
      <li
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result, i)"
        :class="{
          [$style['autocomplete-item']]: true,
          [$style['is-active']]: i === arrowCounter
        }"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['value', 'items', 'codes', 'label', 'placeholder', 'type'],
  data() {
    return {
      results: [],
      isOpen: false,
      arrowCounter: -1,
    };
  },
  methods: {
    closeSuggestedList() {
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    onFocus() {
      if (this.items) {
        this.isOpen = true;
        this.results = this.items;
      }
    },
    onChange(value) {
      this.$emit('input', value);

      if (this.items) {
        if (this.type === 'currency') {
          this.filterResults();
        }
        this.isOpen = true;
      }
    },
    filterResults() {
      const valueToSearch = (this.value ?? '').toLowerCase();
      this.results = this.items
        .filter((item) => item
          .toLowerCase()
          .indexOf(valueToSearch) > -1
        );
    },
    setResult(result, i) {
      if (this.type === 'currency') {
        const currencyCode = this.codes[i];
        this.$emit('input', currencyCode);
      } else {
        this.$emit('input', result);
      }
      this.closeSuggestedList();
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.closeSuggestedList();
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length - 1) {
        this.arrowCounter = this.arrowCounter + 1;
      } else {
        this.arrowCounter = 0;
      }
      this.scrollToSelectedItem();
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      } else {
        this.arrowCounter = this.results.length - 1;
      }
      this.scrollToSelectedItem();
    },
    hasListItemSelected() {
      return this.arrowCounter >= 0;
    },
    onEnter(event) {
      if (this.hasListItemSelected()) {
        this.setResult(this.results[this.arrowCounter], this.arrowCounter);
      } else {
        this.closeSuggestedList();
        this.focusNext(event);
      }
    },
    scrollToSelectedItem() {
      const item = this.$el.getElementsByTagName('li')[this.arrowCounter];
      if (item && item.scrollIntoView) {
        item.scrollIntoView(false);
      }
    },
    focusNext(event) {
      const nextElement = event.target.parentElement.nextElementSibling;
      if (nextElement) {
        nextElement.querySelector('input').focus();
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

<style lang="scss" module>
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
    bg-white
    cursor-pointer
    list-none
    select-none
  ;
}

.autocomplete-item.is-active, .autocomplete-item:hover {
  @apply text-catalina-blue bg-gray;
}
</style>
