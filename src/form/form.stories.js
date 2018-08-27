import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  select,
  text,
} from '@storybook/addon-knobs/vue';

import OForm from './form.vue';
import OFormItem from '../formItem';
import OInput from '../input';
import OButton from '../button';

const POSITION = {
  top: 'top',
  left: 'left',
  right: 'right',
};

storiesOf('Form', module)
  // .add('default', () => '<a-row>simple row</a-row>');
  .addDecorator(withKnobs)
  .add('basic usage', () => ({
    components: {
      OForm,
      OFormItem,
      OInput,
      OButton,
    },
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

    template: `
      <o-form
        ref="form"
        :rules="rules"
        :model="form"
        label-position="${select('Label Position', POSITION, String(POSITION.top))}"
        label-width="${text('Label Width', '100px')}"
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

        <o-button type="primary" @click="validate">Validate</o-button>
        <o-button @click="clearValidation">Clear validation</o-button>
      </o-form>
    `,
  }));
