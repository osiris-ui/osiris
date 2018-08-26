<template>
  <button
    :class="[
      `o-button--${type}`,
      `o-button--${size}`,
      {
        'is-disabled': disabled,
        'is-round': round,
        'is-circle': circle,
        'is-plain': plain,
      }
    ]"
    :type="nativeType"
    :disabled="disabled"
    class="o-button"
    @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {

  name: 'OButton',
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

    size: {
      type: String,
      default: 'normal',
    },

    round: {
      type: Boolean,
      default: false,
    },

    circle: {
      type: Boolean,
      default: false,
    },

    plain: {
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
