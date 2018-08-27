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
    label-position="top"
    label-width="100"
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
