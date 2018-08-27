<template>
  <div
    :style="{ width }"
    :class="[`o-input--${size}`, {
      'is-disabled': disabled,
      'o-input__prefix': prefixIcon || hasPrefix,
      'o-input__suffix': suffixIcon || hasSuffix || isInputError || isInputSuccess,
      'is-success': isInputSuccess,
      'is-error': isInputError,
    }]"
    class="o-input">
    <input
      :placeholder="placeholder"
      :type="type"
      :value="value"
      :readonly="readonly"
      :min="min"
      :max="max"
      :minlength="minlength"
      :maxlength="maxlength"
      :disabled="disabled"
      class="o-input__inner"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput">

    <i
      v-if="prefixIcon"
      :class="`${ prefixIcon }`"
      class="o-input__icon--prefix"/>
    <i
      v-if="suffixIcon || isInputError || isInputSuccess"
      :class="isInputError || isInputSuccess ? {
        'o-icon o-icon-x': isInputError,
        'o-icon o-icon-check': isInputSuccess,
      } : `${
        suffixIcon
      }`"
      class="o-input__icon--suffix"/>

    <slot name="prefix" />
    <slot name="suffix" />
  </div>
</template>

<script>
import dispatch from '../mixins/dispatch';

export default {

  name: 'OInput',
  mixins: [dispatch],
  inject: {
    isFormItemSuccess: {
      from: 'isSuccess',
      default: () => () => false,
    },

    isFormItemError: {
      from: 'isError',
      default: () => () => false,
    },
  },

  props: {
    name: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    width: {
      type: String,
      default: '300px',
    },

    type: {
      type: String,
      default: 'text',
    },

    value: {
      type: [String, Number],
      default: '',
    },

    readonly: {
      type: Boolean,
      default: false,
    },

    autofocus: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    maxlength: {
      type: Number,
      default: Infinity,
    },

    minlength: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },

    min: {
      type: Number,
      default: 0,
    },

    prefixIcon: {
      type: String,
      default: '',
    },

    suffixIcon: {
      type: String,
      default: '',
    },

    isSuccess: {
      type: Boolean,
      default: false,
    },

    isError: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String,
      default: 'normal',
    },
  },

  data() {
    return {
      currentValue: this.value,
    };
  },

  computed: {
    hasPrefix() {
      return !!this.$slots.prefix;
    },

    hasSuffix() {
      return !!this.$slots.suffix;
    },

    isInputSuccess() {
      return this.isSuccess ? this.isSuccess : this.isFormItemSuccess();
    },

    isInputError() {
      return this.isError ? this.isError : this.isFormItemError();
    },
  },

  watch: {
    value(val) {
      if (val === this.currentValue) return;

      this.currentValue = val;
    },
  },

  methods: {
    handleInput(evt) {
      const { value } = evt.target;
      this.$emit('input', value);
      this.dispatch('OFormItem', 'o.form.input', value);
    },

    handleChange(evt) {
      const { value } = evt.target;
      this.$emit('change', value);
      this.dispatch('OFormItem', 'o.form.change', value);
    },

    handleFocus(evt) {
      this.$emit('focus', evt);
      this.dispatch('OFormItem', 'o.form.focus', evt);
    },

    handleBlur(evt) {
      const { value } = evt.target;

      this.$emit('blur', evt);
      this.dispatch('OFormItem', 'o.form.blur', value);
    },
  },
};
</script>
