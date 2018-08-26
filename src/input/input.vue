<template>
  <div
    :style="{ width }"
    :class="[`o-input--${size}`, {
      'is-disabled': disabled,
      'o-input__prefix': prefixIcon || hasPrefix,
      'o-input__suffix': suffixIcon || hasSuffix || isError || isSuccess,
      'is-success': isSuccess,
      'is-error': isError,
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
      v-if="suffixIcon || isError || isSuccess"
      :class="isError || isSuccess ? {
        'o-icon o-icon-x': isError,
        'o-icon o-icon-check': isSuccess,
      } : `${
        suffixIcon
      }`"
      class="o-input__icon--suffix"/>

    <slot name="prefix" />
    <slot name="suffix" />
  </div>
</template>

<script>
export default {

  name: 'AInput',
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
      this.$emit('change', value);
    },

    handleFocus(evt) {
      this.$emit('focus', evt);
    },

    handleBlur(evt) {
      this.$emit('blur', evt);
    },
  },
};
</script>
