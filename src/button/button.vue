<template>
  <button
    :class="`a-button--${type}`"
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
  },

  methods: {
    handleClick(evt) {
      return this.$emit('click', evt);
    },
  },
};
</script>
