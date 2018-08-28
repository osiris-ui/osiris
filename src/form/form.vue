<template>
  <form
    :class="[`o-form--${labelPosition}`]"
    :style="{ width }"
    class="o-form"
    @submit.prevent="handleSubmit">
    <slot />
  </form>
</template>

<script>
export default {

  name: 'OForm',

  props: {
    labelPosition: {
      type: String,
      default: 'top',
    },

    width: {
      type: String,
      default: '100%',
    },

    labelWidth: {
      type: String,
      default: '200px',
    },

    rules: {
      type: Object,
      default: () => ({}),
    },

    model: {
      type: Object,
      required: true,
    },
  },

  provide() {
    return {
      labelWidth: this.labelWidth,
      rules: this.rules,
      model: this.model,
    };
  },

  data() {
    return {
      fields: [],
    };
  },

  created() {
    this.$on('o.form.addField', (field) => {
      if (field) this.fields.push(field);
    });

    this.$on('o.form.removeField', (field) => {
      if (field) this.fields.splice(this.fields.indexOf(field), 1);
    });
  },

  methods: {
    handleSubmit() {
      return this.$emit('submit');
    },

    validate() {
      return this.fields.forEach(field => field.validate());
    },

    clearValidation() {
      return this.fields.forEach(field => field.clearValidation());
    },
  },
};
</script>
