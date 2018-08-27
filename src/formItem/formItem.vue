<template>
  <div class="o-form-item">
    <div
      :style="{
        width: labelWidth,
      }"
      class="o-form-item__label">
      <span
        v-if="isRequired"
        class="color-danger">
        *
      </span>
      <slot name="label">
        <label
          :for="prop">
          {{ label }}
        </label>
      </slot>
    </div>

    <div class="o-form-item__content">
      <slot />
      <collapse-transition>
        <small
          v-if="isError"
          class="o-form-item__error">
          {{ errorMessage }}
        </small>
      </collapse-transition>
    </div>
  </div>
</template>

<script>
import omit from 'lodash/omit';
import isEmpty from 'lodash/isEmpty';
import validate from 'validate.js';
import { CollapseTransition } from 'vue2-transitions';
import dispatch from '../mixins/dispatch';

export default {

  name: 'OFormItem',
  components: { CollapseTransition },
  mixins: [dispatch],

  inject: {
    labelWidth: { default: '100px' },
    formRules: {
      from: 'rules',
    },
    model: {
      default: () => ({}),
    },
  },

  provide() {
    return {
      isSuccess: () => this.isSuccess,
      isError: () => this.isError,
    };
  },

  props: {
    label: {
      type: String,
      default: '',
    },

    prop: {
      type: String,
      default: '',
    },

    rules: {
      type: [Object, Array],
      default: () => ({}),
    },
  },

  data() {
    return {
      errorMessage: '',
      isError: false,
      isSuccess: false,
    };
  },

  computed: {
    trigger() {
      if (this.prop && ((!isEmpty(this.rules) || !isEmpty(this.formRules)))) {
        return this.rules.trigger || this.formRules[this.prop].trigger;
      }

      return null;
    },

    isRequired() {
      if (!isEmpty(this.rules) || !isEmpty(this.formRules)) {
        return this.rules.presence || this.formRules[this.prop].presence;
      }

      return false;
    },
  },

  mounted() {
    if (this.trigger) {
      this.$on(`o.form.${this.trigger}`, this.validate);
    }

    this.dispatch('OForm', 'o.form.addField', this);
  },

  beforeDestroy() {
    this.dispatch('OForm', 'o.form.destroyField', this);
  },

  methods: {
    validate(param) {
      const value = param || this.model[this.prop];

      const rules = !isEmpty(this.rules) ? this.rules : this.formRules[this.prop];

      if (rules.validator) {
        validate.validators.validator = rules.validator;
      }

      if (!rules.presence && !this.model[this.prop]) return this.turnValid();

      const errors = validate.single(value, omit(rules, 'trigger'));
      if (errors && errors.length) {
        const [message] = errors;

        return this.turnInvalid(message);
      }

      return this.turnValid();
    },

    clearValidation() {
      this.isError = false;
      this.isSuccess = false;
      this.errorMessage = '';
    },

    turnValid() {
      this.isError = false;
      this.isSuccess = true;
      this.errorMessage = '';

      return true;
    },

    turnInvalid(message) {
      this.isError = true;
      this.isSuccess = false;
      this.errorMessage = message;

      return false;
    },
  },
};
</script>
