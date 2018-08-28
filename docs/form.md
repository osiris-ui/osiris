# Form

We created a integrated form validation system, heavily inspired on [Element](https://element.eleme.io) validation. The validation system works on top of [Validate.js](https://validatejs.org), a free and open source validation library.

## Basic Usage

```html
/* vue */

<template>
  <o-form
    ref="form"
    :rules="rules"
    :model="form"
    @submit="validate">

    <o-form-item
      label="Name"
      prop="name">
      <o-input v-model="form.name"></o-input>
    </o-form-item>

    <o-form-item
      label="E-mail"
      prop="email">
      <o-input v-model="form.email"></o-input>
    </o-form-item>

    <o-form-item
      label="Are your a real person?"
      prop="isReal">
      <o-radio v-model="form.isReal" :value="true">Yes</o-radio>
      <o-radio v-model="form.isReal" :value="false">No</o-radio>
    </o-form-item>

    <o-form-item
      label="Which following languages do you know?"
      prop="languages">
      <o-checkbox v-model="form.languages" value="Javascript">Javascript</o-checkbox>
      <o-checkbox v-model="form.languages" value="PHP">PHP</o-checkbox>
      <o-checkbox v-model="form.languages" value="Python">Python</o-checkbox>
      <o-checkbox v-model="form.languages" value="Ruby">Ruby</o-checkbox>
    </o-form-item>

    <o-button type="primary" native-type="submit" @click="validate">Validate</o-button>
    <o-button @click="clearValidation">Clear validation</o-button>
  </o-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          isReal: '',
          languages: [],
        },

        rules: {
          name: {
            presence: {
              allowEmpty: false,
              message: 'Please, tell us your name',
            },
            trigger: 'blur',
          },

          email: {
            email: {
              message: 'This is not a valid email',
            },
            trigger: 'blur',
          },

          isReal: {
            presence: {
              message: 'Are you really a real person?',
            },

            validator(value) {
              if (value !== true) return 'You must be a real person';

              return undefined;
            },

            trigger: 'change',
          },

          languages: {
            presence: {
              allowEmpty: false,
              message: 'Please, select a least one',
            },

            trigger: 'change',
          },
        },
      };
    },

    methods: {
      validate() {
        return this.$refs.form.validate();
      },

      clearValidation() {
        return this.$refs.form.clearValidation();
      },
    },
  }
</script>
```

## Form Attrs

| Attribute | Description | Type | Accepted Value | Default |
|--|--|--|--|--|
| model | The form object from data | type Object |  |  |
| rules |  Global rules usage | Object |  |  |
| labelPosition | position of label | String | top/left/right | top |
| labelWitdh |  width of label | String |  | 100px |
| width |  form width | String |  | 100% |


## Form Item Attrs

| Attribute | Description | Type | Accepted Value | Default |
|--|--|--|--|--|
| label |  Label content | String |  |  |
| prop | A key property from form model | String |  |  |
| rules |  Rules for this formItem (if not provided in the main form) |  |  |  |  |


## Form Events

| Event Name | Description | Params |
| -- | -- | -- |
| submit | same as native submit |  |  |

## Form Methods

| Method Name  | Description | Params |
| -- | -- | -- |
| validate | Trigger this method to validate all fields |  |  |

## FormItem Methods
| Method Name | Description | Params |
| -- | -- | -- |
| validate | Trigger this method to validate the Form Item content |  value (non required) |
