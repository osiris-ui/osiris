<template>
  <div class="a-form-item">
    <label
      v-if="label"
      :style="{
        width: labelWidth,
      }"
      :for="prop"
      class="a-form-item__label">
      {{ label }}
    </label>
    <slot
      class="a-form-item__label"
      name="label" />

    <div class="a-form-item__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {

  name: 'AFormItem',

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
