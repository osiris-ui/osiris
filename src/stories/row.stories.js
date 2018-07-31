import { storiesOf } from '@storybook/vue';

import ARow from '../row.vue';

storiesOf('Row', module)
  // .add('default', () => '<a-row>simple row</a-row>');
  .add('default', () => ({
    components: { ARow },
    template: '<a-row>simple row</a-row>',
  }))
  .add('justify center', () => ({
    components: { ARow },
    template: '<a-row justify="center">simple row</a-row>',
  }))
  .add('justify and align center', () => ({
    components: { ARow },
    template: `<a-row justify="center" align="center" wrap="nowrap">
      <div style="width: 100%; box-sizing: border-box">
        box 1
      </div>
      <div style="width: 100%; box-sizing: border-box">
          box 2
      </div>
    </a-row>`,
  }));
