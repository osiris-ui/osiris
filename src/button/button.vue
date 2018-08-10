<template>
  <button class="a-button" :class="`a-button--${type}`">
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

  data() {
    return {

    };
  },
};
</script>
