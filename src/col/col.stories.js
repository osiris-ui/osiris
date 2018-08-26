import { storiesOf } from '@storybook/vue';

import ORow from '../row/row.vue';
import OCol from './col.vue';

storiesOf('Col', module)
  // .add('default', () => '<o-row>simple row</o-row>');
  .add('default', () => ({
    components: { ORow, OCol },
    template: `<o-row>
      <o-col :span="12">a</o-col>
      <o-col :span="8">b</o-col>
      <o-col :span="4">c</o-col>
      <o-col :span="8">d</o-col>
      <o-col :span="8">e</o-col>
      <o-col :span="8">f</o-col>
    </o-row>`,
  }))
  .add('offset', () => ({
    components: { ORow, OCol },
    template: `<o-row>
      <o-col :span="1">a</o-col>
      <o-col :span="2" :offset="21">b</o-col>
      <o-col :span="4">c</o-col>
      <o-col :span="8">d</o-col>
      <o-col :span="8" :offset="4">e</o-col>
      <o-col :span="8">f</o-col>
    </o-row>`,
  }))
  .add('responsive', () => ({
    components: { ORow, OCol },
    template: `<o-row>
      <o-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</o-col>
      <o-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</o-col>
      <o-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</o-col>
      <o-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</o-col>
      <o-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</o-col>
      <o-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</o-col>
    </o-row>`,
  }));
