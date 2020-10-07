<template>
  <div
    :class="[
      `o-alert--${type}`,
      `o-alert--${size}`,
      {
        'is-round': round,
      }
    ]"
    class="o-alert">
    <div>
      <div class="o-alert-icon">
        <i
          :class="[
            `o-icon-${icon}`
          ]"
          class="o-icon"/>
      </div>
      <div
        :class="[
          `o-alert-text--${type}`,
        ]"
        class="o-alert-text">
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'OAlert',
  props: {
    icon: {
      type: String,
      default: 'check',
    },

    type: {
      type: String,
      default: 'primary',
    },

    size: {
      type: String,
      default: 'normal',
    },

    round: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
