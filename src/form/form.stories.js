import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  select,
  text,
} from '@storybook/addon-knobs/vue';

import OForm from './form.vue';
import OFormItem from '../formItem';
import OInput from '../input';

const POSITION = {
  top: 'top',
  left: 'left',
  right: 'right',
};

storiesOf('Form', module)
  // .add('default', () => '<a-row>simple row</a-row>');
  .addDecorator(withKnobs)
  .add('basic usage', () => ({
    components: { OForm, OFormItem, OInput },
    data() {
      return {
        data: '',
      };
    },

    template: `
      <o-form
        label-position="${select('Label Position', POSITION, String(POSITION.top))}"
        label-width="${text('Label Width', '100px')}">
        <o-form-item
          label="E-mail"
          prop="email">
          <o-input v-model="data"></o-input>
        </o-form-item>
      </o-form>
    `,
  }));
