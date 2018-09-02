<template>
  <div
    :style="{ width }"
    :class="[`o-select--${size}`]"
    class="o-select">
    <button
      class="o-select__trigger"
      @keydown.esc="close"
      @keydown.up="highlightPrev"
      @keydown.down="highlightNext"
      @keydown.enter.prevent="selectHighlighted"
      @click="open">
      <span
        v-show="value"
        class="o-select__text">
        {{ value }}
      </span>

      <span
        v-if="!value"
        class="o-select__placeholder">
        {{ placeholder }}

        <span v-if="!placeholder">
          &nbsp;
        </span>
      </span>

      <span class="o-select__arrow">
        <i class="o-icon o-icon-chevron-down" />
      </span>
    </button>

    <ul
      v-if="isOpen"
      ref="options"
      class="o-select__list">
      <li
        v-for="(option, i) in filteredOptions"
        :key="option.value"
        :class="{ 'is-highlighted': i === highlightedIndex }"
        class="o-select__list-item"
        @click="select(option)">
        {{ option.label }}
      </li>
      <li
        v-if="!options.length"
        class="o-select__empty">
        {{ emptyText }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'OSelect',
  props: {
    placeholder: {
      type: String,
      default: 'Select',
    },

    emptyText: {
      type: String,
      default: 'There are no options available',
    },

    width: {
      type: String,
      default: '300px',
    },

    size: {
      type: String,
      default: 'normal',
    },
  },

  data() {
    return {
      value: '',
      isOpen: false,
      highlightedIndex: 0,
      options: [
        {
          label: 'a',
          value: 'a',
        },
        {
          label: 'b',
          value: 'b',
        },
        {
          label: 'c',
          value: 'c',
        },
      ],
    };
  },

  computed: {
    filteredOptions() {
      return this.options;
    },
  },

  methods: {
    select(option) {
      this.value = option.value;
      this.highlightedIndex = 0;
      this.close();
    },

    open() {
      if (this.isOpen) {
        return;
      }

      this.isOpen = true;

      this.$nextTick(() => {
        this.scrollToHighlighted();
      });
    },

    close() {
      this.isOpen = false;
    },

    selectHighlighted() {
      this.select(this.filteredOptions[this.highlightedIndex]);
    },

    scrollToHighlighted() {
      this.$refs.options.children[this.highlightedIndex].scrollIntoView({
        block: 'nearest',
      });
    },

    highlight(index) {
      this.highlightedIndex = index;

      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.filteredOptions.length - 1;
      }

      if (this.highlightedIndex > this.filteredOptions.length - 1) {
        this.highlightedIndex = 0;
      }

      this.scrollToHighlighted();
    },

    highlightNext() {
      this.highlight(this.highlightedIndex + 1);
    },

    highlightPrev() {
      this.highlight(this.highlightedIndex - 1);
    },
  },
};
</script>
