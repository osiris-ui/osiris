<template>
  <label
    :class="[
      'o-radio',
      `o-radio--${size}`, {
        'is-disabled': disabled,
        'is-checked': isChecked
    }]"
    role="radio"
  >
    <input
      :name="name"
      :value="value"
      :disabled="disabled"
      :checked="isChecked"
      type="radio"
      class="o-radio__inner"
      aria-hidden="true"
      @change.prevent.stop="handleChange"
    >
    <span class="o-radio__label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script>
import dispatch from '../mixins/dispatch';

export default {
  name: 'ORadio',
  mixins: [dispatch],

  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    label: [String, Number],
    disabled: Boolean,
    modelValue: {
      type: [String, Number, Boolean],
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
      return this.modelValue === this.value;
    },
  },
  methods: {
    handleChange() {
      this.$emit('change', this.value);
      this.dispatch('OFormItem', 'o.form.change', this.value);
    },
  },
};
</script>
