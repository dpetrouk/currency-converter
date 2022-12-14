<template>
  <div>
    <label :class="$style.label">{{ label }}</label>
    <input
      :class="$style.input"
      :placeholder="placeholder"
      :value="value"
      :type="type"
      ref="input"
      @input="onChange($event.target.value)"
      @focus="onFocus($event.target.value)"
      @keydown.down="onArrowDown" @keydown.up="onArrowUp"
      @keydown.enter="onEnter" @keydown.tab="hideOptions"
    />
    <ul
      v-show="isOpen"
      :class="$style['autocomplete-results']"
    >
      <li
        v-for="(suggestedItem, i) in suggestedList"
        :key="i"
        @click="setResult(suggestedItem)"
        :class="{
          [$style['autocomplete-item']]: true,
          [$style['is-active']]: i === arrowCounter
        }"
      >
        {{ suggestedItem }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['value', 'options', 'label', 'placeholder', 'type'],
  data() {
    return {
      suggestedList: [],
      isOpen: false,
      arrowCounter: -1,
    };
  },
  methods: {
    filterOptions(value) {
      const valueToSearch = value ? String(value).toLowerCase() : '';
      return this.options
        .filter((item) => String(item).toLowerCase().indexOf(valueToSearch) > -1);
    },
    setResult(selectedItem) {
      this.$emit('input', selectedItem);
      this.hideOptions();
    },
    showOptions(value) {
      this.suggestedList = this.filterOptions(value);
      this.isOpen = true;
    },
    hideOptions() {
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    onFocus(value) {
      if (this.options) {
        this.showOptions(value);
      }
    },
    onChange(value) {
      this.$emit('input', value);

      this.showOptions(value);
    },
    onArrowDown() {
      if (this.arrowCounter < this.suggestedList.length - 1) {
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
        this.arrowCounter = this.suggestedList.length - 1;
      }
      this.scrollToSelectedItem();
    },
    hasOptionSelected() {
      return this.arrowCounter >= 0;
    },
    onEnter() {
      if (this.hasOptionSelected()) {
        this.setResult(this.suggestedList[this.arrowCounter]);
      } else {
        this.hideOptions();
        this.focusNext();
      }
    },
    scrollToSelectedItem() {
      const item = this.$el.getElementsByTagName('li')[this.arrowCounter];
      if (item && item.scrollIntoView) {
        item.scrollIntoView(false);
      }
    },
    focusNext() {
      const currentElement = this.$refs.input;
      const nextElement = currentElement.parentElement.nextElementSibling;
      if (nextElement) {
        nextElement.querySelector('input').focus();
      } else {
        currentElement.blur();
      }
    },
    handleClickOutside(event) {
      const inputIsClicked = this.$refs.input.contains(event.target);
      const optionsAreClicked = this.$refs.input.nextElementSibling.contains(event.target);
      if (!inputIsClicked && !optionsAreClicked) {
        this.hideOptions();
      }
    }
  },
  mounted() {
    document.addEventListener('mousedown', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('mousedown', this.handleClickOutside);
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
