<template>
  <button
    class="a-button"
    :class="`a-button--${type}`"
    @click.prevent.stop="onClick"
  >
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
    onClick: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {

    };
  },
};
</script>
