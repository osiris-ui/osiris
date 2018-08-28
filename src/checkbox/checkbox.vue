<template>
  <label
    :class="[
      'o-checkbox',
      `o-checkbox--${size}`, {
        'is-disabled': disabled,
        'is-checked': isChecked
    }]"
    role="checkbox"
  >
    <input
      :name="name"
      :value="value"
      :disabled="disabled"
      :checked="isChecked"
      type="checkbox"
      class="o-checkbox__inner"
      aria-hidden="true"
      @change.prevent.stop="handleChange"
    >
    <span class="o-checkbox__label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script>
import dispatch from '../mixins/dispatch';

export default {
  name: 'OCheckbox',
  mixins: [dispatch],

  model: {
    prop: 'modelValue',
    event: 'change',
  },

  props: {
    label: [String, Number],
    disabled: Boolean,
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: undefined,
    },
    name: String,
    value: [Number, String, Boolean],
    size: {
      type: String,
      default: 'medium',
    },
  },
  computed: {
    isChecked() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.indexOf(this.value) >= 0;
      }

      return this.modelValue === this.value;
    },
  },
  methods: {
    addValueToModel() {
      const value = [...this.modelValue, this.value];
      this.$emit('change', value);
      this.dispatch('OFormItem', 'o.form.change', value);
    },

    removeValueFromModel() {
      const index = this.modelValue.indexOf(this.value);
      const val = [
        ...this.modelValue.slice(0, index),
        ...this.modelValue.slice(index + 1),
      ];
      this.$emit('change', val);
      this.dispatch('OFormItem', 'o.form.change', val);
    },

    handleChange(event) {
      const { checked } = event.target;

      if (Array.isArray(this.modelValue)) {
        const callback = checked ? this.addValueToModel : this.removeValueFromModel;
        callback();
      } else {
        const val = checked ? this.value : undefined;
        this.$emit('change', val);
        this.dispatch('OFormItem', 'o.form.change', val);
      }
    },
  },
};
</script>
