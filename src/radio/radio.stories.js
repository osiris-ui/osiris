import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  select,
} from '@storybook/addon-knobs/vue';

import ORadio from './radio.vue';

const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

storiesOf('Radio', module)
  .add('default', () => ({
    components: { ORadio },
    data() {
      return {
        modelValue: 1,
      };
    },
    template: `
    <div>
      <p>Selected Value: {{modelValue}}</p>
      <o-radio v-model="modelValue" :value="1" name="radio" label="1"></o-radio>
      <o-radio v-model="modelValue" :value="2" name="radio" label="2"></o-radio>
    </div>
    `,
  }))
  .add('with a disabled', () => ({
    components: {
      ORadio,
    },
    data() {
      return {
        modelValue: 2,
      };
    },
    template: `
    <div>
      <p>Selected Value: {{modelValue}}</p>
      <o-radio v-model="modelValue" :value="1" :disabled="true" name="radio" label="Disabled"></o-radio>
      <o-radio v-model="modelValue" :value="2" name="radio" label="2"></o-radio>
    </div>
    `,
  }))
  .addDecorator(withKnobs)
  .add('with editable size', () => ({
    components: {
      ORadio,
    },
    template: `
      <o-radio
        :value="1"
        name="radio"
        label="Radio"
        size="${select('size', SIZES, String(SIZES.medium))}"
      />`,
  }));
