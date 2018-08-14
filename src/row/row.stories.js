import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  number,
  select,
} from '@storybook/addon-knobs/vue';

import ARow from './row.vue';

const justifyOptions = {
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  baseline: 'baseline',
};

const alignOptions = {
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
};

storiesOf('Row', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { ARow },
    template: `<a-row>${text('text', 'simple row')}</a-row>`,
  }))
  .add('justify center', () => ({
    components: { ARow },
    template: `<a-row
      justify="${select('justify', justifyOptions, justifyOptions.center)}">
      ${text('text', 'simple row')}
    </a-row>`,
  }))
  .add('justify and align center', () => ({
    components: { ARow },
    template: `<a-row justify="${select('justify', justifyOptions, justifyOptions.center)}"
      :gutter="${number('gutter', 20)}"
      align="${select('align', alignOptions, alignOptions.center)}">
      <div style="width: 25%; box-sizing: border-box">
        ${text('box1 text', 'box 1')}
      </div>
      <div style="width: 25%; box-sizing: border-box">
          ${text('box2 text', 'box 2')}
      </div>
    </a-row>`,
  }));
