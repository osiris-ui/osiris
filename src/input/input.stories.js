import { storiesOf } from '@storybook/vue';

import OInput from './input.vue';

storiesOf('Input', module)
  // .add('default', () => '<o-row>simple row</o-row>');
  .add('default', () => ({
    components: { OInput },
    template: '<o-input placeholder="Type here"></o-input>',
  }))
  .add('with icon', () => ({
    components: { OInput },
    template: `
    <div>
      <o-input prefix-icon="o-icon o-icon-search" placeholder="Type here"></o-input>
      <o-input suffix-icon="o-icon o-icon-calendar" placeholder="Type here"></o-input>
      <o-input suffix-icon="o-icon o-icon-calendar" prefix-icon="o-icon o-icon-search" placeholder="Type here"></o-input>

      <o-input>
        <i class="o-icon o-icon-search o-input__icon--prefix" slot="prefix" placeholder="Type here"></i>
      </o-input>

      <o-input>
        <i class="o-icon o-icon-calendar o-input__icon--suffix" slot="suffix" placeholder="Type here"></i>
      </o-input>
    </div>
    `,
  }))
  .add('with status', () => ({
    components: { OInput },
    template: `
    <div>
      <o-input placeholder="Type here" value="Yay, you did it!" is-success></o-input>
      <o-input placeholder="Type here" value="Opsss, this is an error" is-error></o-input>
    </div>
    `,
  }))
  .add('sizes', () => ({
    components: { OInput },
    template: `
    <div>
      <o-input placeholder="Large size" size="large"></o-input>
      <o-input placeholder="Normal size"></o-input>
      <o-input placeholder="Small Size" size="small"></o-input>
      <o-input placeholder="Mini Size" size="mini"></o-input>
    </div>
    `,
  }))
  .add('disabled', () => ({
    components: { OInput },
    template: '<o-input placeholder="Type here" disabled></o-input>',
  }))
  .add('readonly', () => ({
    components: { OInput },
    template: '<o-input placeholder="Type here" value="Ops, this is just readonly" readonly></o-input>',
  }));
