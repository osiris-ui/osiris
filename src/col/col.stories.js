import { storiesOf } from '@storybook/vue';

import ARow from '../row/row.vue';
import ACol from './col.vue';

storiesOf('Col', module)
  // .add('default', () => '<a-row>simple row</a-row>');
  .add('default', () => ({
    components: { ARow, ACol },
    template: `<a-row>
      <a-col :span="12">a</a-col>
      <a-col :span="8">b</a-col>
      <a-col :span="4">c</a-col>
      <a-col :span="8">d</a-col>
      <a-col :span="8">e</a-col>
      <a-col :span="8">f</a-col>
    </a-row>`,
  }))
  .add('offset', () => ({
    components: { ARow, ACol },
    template: `<a-row>
      <a-col :span="1">a</a-col>
      <a-col :span="2" :offset="21">b</a-col>
      <a-col :span="4">c</a-col>
      <a-col :span="8">d</a-col>
      <a-col :span="8" :offset="4">e</a-col>
      <a-col :span="8">f</a-col>
    </a-row>`,
  }))
  .add('responsive', () => ({
    components: { ARow, ACol },
    template: `<a-row>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="3">a</a-col>
    </a-row>`,
  }));
