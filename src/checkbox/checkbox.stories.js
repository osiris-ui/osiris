import { storiesOf } from '@storybook/vue';
import OCheckbox from './checkbox.vue';

storiesOf('Checkbox', module)
  .add('default', () => ({
    components: { OCheckbox },
    data() {
      return {
        modelValue: 1,
      };
    },
    template: `
      <div>
        <p>Selected Value: {{modelValue}}</p>
        <o-checkbox v-model="modelValue" :value="1" name="check" label="checkbox" />
      </div>
    `,
  }))
  .add('with a disabled', () => ({
    components: {
      OCheckbox,
    },
    data() {
      return {
        modelValue: 2,
      };
    },
    template: `
      <o-checkbox
        v-model="modelValue"
        :value="1"
        name="check"
        label="Disabled checkbox"
        :disabled="true"
      />
    `,
  }))
  .add('with model being an array', () => ({
    components: {
      OCheckbox,
    },
    data() {
      return {
        modelValue: [],
      };
    },
    template: `
    <div>
      <p>Model Value: {{modelValue}}</p>
      <o-checkbox
        v-model="modelValue"
        :value="1"
        name="check"
        label="1"
      />
      <o-checkbox
        v-model="modelValue"
        :value="2"
        name="check"
        label="2"
      />
    </div>
    `,
  }));
