<template>
  <div class="o-form-item">
    <label
      v-if="label"
      :style="{
        width: labelWidth,
      }"
      :for="prop"
      class="o-form-item__label">
      {{ label }}
    </label>
    <slot
      class="o-form-item__label"
      name="label" />

    <div class="o-form-item__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {

  name: 'OFormItem',

  inject: ['labelWidth'],

  props: {
    label: {
      type: String,
      default: '',
    },

    prop: {
      type: String,
      default: '',
    },
  },
};
</script>
