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
import ORadio from '../radio';
import OCheckbox from '../checkbox';
import OSelect from '../select';

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
      ORadio,
      OCheckbox,
      OSelect,
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          isReal: '',
          country: '',
          cities: [],
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

          country: {
            presence: {
              allowEmpty: false,
              message: 'Please, select your country',
            },

            trigger: 'change',
          },

          cities: {
            presence: {
              allowEmpty: false,
              message: 'Please, select at least 1 city',
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

    template: `
      <o-form
        ref="form"
        :rules="rules"
        :model="form"
        label-position="${select('Label Position', POSITION, String(POSITION.top))}"
        label-width="${text('Label Width', '200px')}"
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

        <o-form-item
          label="Where are you from?"
          prop="country">
          <o-select
            v-model="form.country"
            placeholder="Select your country"
            :options="[
              {
                label: 'Brazil',
                value: 'brazil',
              },
              {
                label: 'United States',
                value: 'usa',
              },
              {
                label: 'Germany',
                value: 'germany',
              },
              {
                label: 'French',
                value: 'french',
              },
              {
                label: 'Italy',
                value: 'italy',
              },
              {
                label: 'China',
                value: 'china',
              },
            ]">
          </o-select>
        </o-form-item>

        <o-form-item
          label="What places did you already visited?"
          prop="cities">
          <o-select
            v-model="form.cities"
            placeholder="Select the cities"
            :options="[
              {
                label: 'São Paulo',
                value: 'sao-paulo',
              },
              {
                label: 'London',
                value: 'london',
              },
              {
                label: 'Berlin',
                value: 'berlin',
              },
              {
                label: 'Paris',
                value: 'paris',
              },
              {
                label: 'Roma',
                value: 'roma',
              },
              {
                label: 'Beijing',
                value: 'beijing',
              },
              {
                label: 'New York',
                value: 'new york',
              },
            ]"
            multiple>
          </o-select>
        </o-form-item>

        <o-button type="primary" native-type="submit" @click="validate">Validate</o-button>
        <o-button @click="clearValidation">Clear validation</o-button>
      </o-form>
    `,
  }));
