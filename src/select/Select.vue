<template>
  <div
    :style="{ width }"
    :class="[`o-select--${size}`]"
    class="o-select">
    <button
      ref="trigger"
      class="o-select__trigger"
      @keydown.esc="close"
      @keydown.up="highlightPrev"
      @keydown.down="highlightNext"
      @keydown.enter.prevent="selectHighlighted"
      @click="open">
      <span
        v-show="currentValue"
        class="o-select__text">
        {{ label }}
      </span>

      <span
        v-if="!currentValue"
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

    <div
      v-show="isOpen"
      ref="dropdown"
      class="o-select__dropdown o-popper">
      <div class="o-select__dropdown__inner">
        <ul
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
        <div class="o-popper__arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import Popper from 'popper.js';
import dispatch from '../mixins/dispatch';

export default {

  name: 'OSelect',
  mixins: [dispatch],
  model: {
    event: 'change',
  },

  props: {
    value: {
      type: [Array, String, Number, Object],
      default: '',
    },

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

    options: {
      type: Array,
      default: () => ([]),
    },
  },

  data() {
    return {
      currentValue: this.value,
      isOpen: false,
      highlightedIndex: -1,
    };
  },

  computed: {
    filteredOptions() {
      return this.options;
    },

    label() {
      if (!this.options) return '';

      const index = this.options.findIndex(option => option.value === this.currentValue);

      if (index && index !== -1) return this.options[index].label;

      return '';
    },
  },

  beforeDestroy() {
    if (this.popper) {
      this.popper.destroy();
    }
  },

  methods: {
    setupPopper() {
      if (this.popper === undefined) {
        this.popper = new Popper(this.$refs.trigger, this.$refs.dropdown, {
          placement: 'bottom',
        });
      } else {
        this.popper.scheduleUpdate();
      }
    },

    select(option) {
      const { value } = option;
      if (this.currentValue === value) return;

      this.currentValue = value;
      this.$emit('change', value);
      this.dispatch('OFormItem', 'o.form.change', value);
      this.highlightedIndex = -1;
      this.close();
    },

    open() {
      if (this.isOpen) {
        return this.close();
      }

      this.isOpen = true;

      return this.$nextTick(() => {
        this.setupPopper();
        this.scrollToHighlighted();
      });
    },

    close() {
      this.isOpen = false;
      this.highlightedIndex = -1;
    },

    selectHighlighted() {
      if (this.highlightedIndex === -1) {
        this.highlightedIndex = 0;
      }

      this.select(this.filteredOptions[this.highlightedIndex]);
    },

    scrollToHighlighted() {
      this.$refs.options.children[this.highlightedIndex !== -1 ? this.highlightedIndex : 0]
        .scrollIntoView({
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
