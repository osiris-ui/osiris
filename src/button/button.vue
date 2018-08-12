<template>
  <button
    :class="`a-button--${type}`"
    :type="nativeType"
    :disabled="disabled"
    class="a-button"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {

  name: 'aButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },

    nativeType: {
      type: String,
      default: 'button',
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick(evt) {
      return this.$emit('click', evt);
    },
  },
};
</script>
