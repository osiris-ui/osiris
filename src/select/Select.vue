<template>
  <div
    v-click-outside="close"
    :style="{ width }"
    :class="[`o-select--${size}`, {
      'is-clearable': clearable
        && ((currentValue && !multiple) || (currentValue.length && multiple))
    }]"
    class="o-select">
    <button
      v-if="!filterable"
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

      <button
        v-if="clearable && !multiple"
        class="o-select__clearable"
        @click.stop="disselect">
        <i class="o-icon o-icon-x" />
      </button>
    </button>

    <div
      v-if="filterable"
      ref="trigger"
      style="width: 100%;"
      class="o-select__trigger"
      role="button"
      @click="open">

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

      <input
        ref="trigger-input"
        v-model="search"
        :style="`width: ${search || (currentValue.length
          || (typeof currentValue === 'string' && currentValue))
        ? 20 + (10 * search.length) : 100}px`"
        :placeholder="!currentValue || !currentValue.length ? placeholder : ''"
        style="max-width: 100%"
        @keydown="typing"
        @keydown.esc="close"
        @keydown.up="highlightPrev"
        @keydown.down="highlightNext"
        @keydown.delete="handleDelete"
        @keydown.enter.prevent="selectHighlighted">

      <i
        :class="`o-icon o-icon-chevron-${isOpen ? 'up' : 'down'}`"
        class="o-input__icon--suffix o-select__arrow" />

      <button
        v-if="clearable && !multiple"
        class="o-select__clearable"
        @click="disselect">
        <i class="o-icon o-icon-x" />
      </button>
    </div>

    <div
      v-show="isOpen"
      ref="dropdown"
      class="o-select__dropdown o-popper">
      <div class="o-select__dropdown__inner">
        <ul
          v-if="filteredOptions.length"
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
          v-if="!filteredOptions.length && ((filterable && !search) || !filterable)"
          class="o-select__empty">
          {{ emptyText }}
        </small>
        <small
          v-else-if="!filteredOptions.length && filterable && search"
          class="o-select__empty">
          {{ emptySearch }}
        </small>
        <div class="o-popper__arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import Popper from 'popper.js';
import ClickOutside from 'vue-click-outside';
import dispatch from '../mixins/dispatch';

export default {

  name: 'OSelect',
  directives: {
    ClickOutside,
  },
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

    emptySearch: {
      type: String,
      default: 'Your search did not match any listings',
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

    filterable: {
      type: Boolean,
      default: false,
    },

    clearable: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      currentValue: this.value,
      isOpen: false,
      highlightedIndex: -1,
      search: '',
      isDeleting: false,
    };
  },

  computed: {
    filteredOptions() {
      if ((this.search === this.currentValue) || (this.currentValue.indexOf(this.search) !== -1)) {
        return this.options;
      }

      return this.options.filter(option => option.label
        .toLowerCase()
        .startsWith(this.search.toLowerCase()));
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
        this.search = '';

        if (this.currentValue.includes(value)) {
          this.currentValue.splice(this.currentValue.indexOf(value), 1);
        } else {
          this.currentValue.push(value);
        }
        this.$emit('change', this.currentValue);
        this.dispatch('OFormItem', 'o.form.change', this.currentValue);

        if (this.filterable) {
          this.$refs['trigger-input'].focus();
        }
      } else if (this.multiple && typeof this.currentValue === 'string') {
        this.currentValue = [value];
        this.$emit('change', this.currentValue);
        this.dispatch('OFormItem', 'o.form.change', this.currentValue);
      } else {
        this.currentValue = value;
        this.search = value;
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

      if (this.filterable) {
        this.$refs['trigger-input'].focus();
      }

      return this.$nextTick(() => {
        this.setupPopper();
        this.scrollToHighlighted();
      });
    },

    typing() {
      if (!this.multiple) {
        this.currentValue = '';
      }

      this.isOpen = true;

      return this.$nextTick(() => {
        this.setupPopper();
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
      } else {
        this.currentValue = '';
        this.search = '';
      }

      return this.emit();
    },

    handleDelete() {
      if (!this.search && this.isDeleting) {
        this.currentValue.pop();
        this.isDeleting = false;
      } else if (!this.search && !this.isDeleting) {
        this.isDeleting = true;
      }
    },

    emit() {
      this.$emit('change', this.currentValue);
      this.dispatch('OFormItem', 'o.form.change', this.currentValue);
    },
  },
};
</script>
