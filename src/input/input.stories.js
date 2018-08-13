import { storiesOf } from '@storybook/vue';

import AInput from './input.vue';

storiesOf('Input', module)
  // .add('default', () => '<a-row>simple row</a-row>');
  .add('default', () => ({
    components: { AInput },
    template: '<a-input placeholder="Type here"></a-input>',
  }))
  .add('with icon', () => ({
    components: { AInput },
    template: `
    <div>
      <a-input prefix-icon="a-icon a-icon-search" placeholder="Type here"></a-input>
      <a-input suffix-icon="a-icon a-icon-calendar" placeholder="Type here"></a-input>
      <a-input suffix-icon="a-icon a-icon-calendar" prefix-icon="a-icon a-icon-search" placeholder="Type here"></a-input>

      <a-input>
        <i class="a-icon a-icon-search a-input__icon--prefix" slot="prefix" placeholder="Type here"></i>
      </a-input>

      <a-input>
        <i class="a-icon a-icon-calendar a-input__icon--suffix" slot="suffix" placeholder="Type here"></i>
      </a-input>
    </div>
    `,
  }))
  .add('with status', () => ({
    components: { AInput },
    template: `
    <div>
      <a-input placeholder="Type here" value="Yay, you did it!" is-success></a-input>
      <a-input placeholder="Type here" value="Opsss, this is an error" is-error></a-input>
    </div>
    `,
  }))
  .add('sizes', () => ({
    components: { AInput },
    template: `
    <div>
      <a-input placeholder="Large size" size="large"></a-input>
      <a-input placeholder="Normal size"></a-input>
      <a-input placeholder="Small Size" size="small"></a-input>
      <a-input placeholder="Mini Size" size="mini"></a-input>
    </div>
    `,
  }))
  .add('disabled', () => ({
    components: { AInput },
    template: '<a-input placeholder="Type here" disabled></a-input>',
  }))
  .add('readonly', () => ({
    components: { AInput },
    template: '<a-input placeholder="Type here" value="Ops, this is just readonly" readonly></a-input>',
  }));
