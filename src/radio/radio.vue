<template>
  <label
    :class="[
    `a-radio--${size}`,
    {'is-disabled': disabled},
    {'is-checked': isChecked}
    ]"
    role="radio"
  >
  <input
    type="radio"
    class="a-radio__inner"
    aria-hidden="true"
    :name="name"
    :value="value"
    :checked="isChecked"
    :disabled="disabled"
    @change.prevent.stop="handleChange"
  />
  <span class="a-radio__label">
    <slot>
      {{value}} - {{name}} - {{label}}
    </slot>
  </span>
</label>
</template>

<script>
  export default {
    model: {
      prop: 'modelValue',
      event: 'change'
    },
    name: 'ARadio',
    props: {
      label: [String, Number],
      disabled: Boolean,
      checked: {
        type: Boolean,
        default: false,
      },
      modelValue: {
        default: undefined,
      },
      name: String,
      value: [Number, String, Boolean],
      size: {
        type: String,
        default: 'medium',
      },
    },
    computed: {
      isChecked() {
        if(this.modelValue === undefined) {
          return this.checked;
        }

        return this.modelValue === this.value
      }
    },
    watch: {
      checked(newValue) {
        if (newValue !== this.isChecked) {
          this.handleChange()
        }
      },
    },
    methods: {
      handleChange() {
        this.$emit('change', this.value);
      },
    },
  }
</script>
