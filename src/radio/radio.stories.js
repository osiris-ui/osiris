import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  select,
} from '@storybook/addon-knobs/vue';

import ARadio from './radio.vue';

const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

storiesOf('Radio', module)
  .add('default', () => ({
    components: { ARadio },
    data() {
      return {
        modelValue: 1,
      };
    },
    template: `
    <div>
      <p>Selected Value: {{modelValue}}</p>
      <a-radio v-model="modelValue" :value="1" name="radio" label="1" />
      <a-radio v-model="modelValue" :value="2" name="radio" label="2" />
    </div>
    `,
  }))
  .add('with a disabled', () => ({
    components: {
      ARadio,
    },
    data() {
      return {
        modelValue: 2,
      };
    },
    template: `
    <div>
      <p>Selected Value: {{modelValue}}</p>
      <a-radio v-model="modelValue" :value="1" :disabled="true" name="radio" label="Disabled" />
      <a-radio v-model="modelValue" :value="2" name="radio" label="2" />
    </div>
    `,
  }))
  .addDecorator(withKnobs)
  .add('with editable size', () => ({
    components: {
      ARadio,
    },
    template: `
      <a-radio
        :value="1"
        name="radio"
        label="Radio"
        :size="${select('size', SIZES, SIZES.medium)}"
      />`,
  }));
