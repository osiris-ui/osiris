import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  select,
} from '@storybook/addon-knobs/vue';

import AForm from './form.vue';
import AFormItem from '../formItem';
import AInput from '../input';

const POSITION = {
  top: 'top',
  left: 'left',
  right: 'right',
};

storiesOf('Form', module)
  // .add('default', () => '<a-row>simple row</a-row>');
  .addDecorator(withKnobs)
  .add('basic usage', () => ({
    components: { AForm, AFormItem, AInput },
    data() {
      return {
        data: '',
      };
    },

    template: `
      <a-form
        label-position="${select('Label Position', POSITION, String(POSITION.top))}">
        <a-form-item
          label="E-mail"
          prop="email">
          <a-input v-model="data"></a-input>
        </a-form-item>
      </a-form>
    `,
  }));
