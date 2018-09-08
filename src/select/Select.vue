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
        v-if="currentValue && typeof currentValue === 'string'"
        class="o-select__text">
        {{ label }}
      </span>

      <span v-if="currentValue && typeof currentValue === 'object'">
        <span
          v-for="option in currentValue"
          :key="option"
          class="o-select__multiple-tag">
          {{ findLabel(option) }}

          <button
            class="o-select__disselect-button"
            @click.stop="disselect(option)">
            <i class="o-icon o-icon-x" />
          </button>
        </span>
      </span>

      <span
        v-if="!currentValue || !currentValue.length"
        class="o-select__placeholder">
        {{ placeholder }}

        <span v-if="!placeholder">
          &nbsp;
        </span>
      </span>

      <span class="o-select__arrow">
        <i :class="`o-icon o-icon-chevron-${isOpen ? 'up' : 'down'}`" />
      </span>
    </button>

    <div
      v-show="isOpen"
      ref="dropdown"
      class="o-select__dropdown o-popper">
      <div class="o-select__dropdown__inner">
        <ul
          v-if="options.length"
          ref="options"
          :class="{ 'is-multiple': multiple }"
          class="o-select__list">
          <li
            v-for="(option, i) in filteredOptions"
            :key="option.value"
            :class="{
              'is-highlighted': i === highlightedIndex,
              'is-active': typeof currentValue === 'object' && currentValue.includes(option.value)
            }"
            class="o-select__list-item"
            @click="select(option)">
            {{ option.label }}
          </li>
        </ul>
        <small
          v-if="!options.length"
          class="o-select__empty">
          {{ emptyText }}
        </small>
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
      type: [Array, String, Number],
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

    multiple: {
      type: Boolean,
      default: false,
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
      if (!this.options.length) return '';

      const index = this.options.findIndex(option => option.value === this.currentValue);

      if (index !== -1) return this.options[index].label;

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

      if (this.multiple && typeof this.currentValue === 'object') {
        if (this.currentValue.includes(value)) {
          this.currentValue.splice(this.currentValue.indexOf(value), 1);
        } else {
          this.currentValue.push(value);
        }
        this.$emit('change', this.currentValue);
        this.dispatch('OFormItem', 'o.form.change', this.currentValue);
      } else if (this.multiple && typeof this.currentValue === 'string') {
        this.currentValue = [value];
        this.$emit('change', this.currentValue);
        this.dispatch('OFormItem', 'o.form.change', this.currentValue);
      } else {
        this.currentValue = value;
        this.$emit('change', value);
        this.dispatch('OFormItem', 'o.form.change', value);
        this.highlightedIndex = -1;
        this.close();
      }
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
      if (this.options.length) {
        this.$refs.options.children[this.highlightedIndex !== -1 ? this.highlightedIndex : 0]
          .scrollIntoView({
            block: 'nearest',
          });
      }
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

    findLabel(option) {
      const index = this.options.findIndex(op => op.value === option);

      return this.options[index].label;
    },

    disselect(option) {
      if (this.multiple) {
        this.currentValue.splice(this.currentValue.indexOf(option), 1);
        this.$emit('change', this.currentValue);
        this.dispatch('OFormItem', 'o.form.change', this.currentValue);
      }
    },
  },
};
</script>
