import { storiesOf } from '@storybook/vue';

import AButton from './button.vue';

storiesOf('Button', module)
  // .add('default', () => '<a-row>simple row</a-row>');
  .add('default', () => ({
    components: { AButton },
    template: '<a-button>Button</a-button>',
  }))
  .add('primary', () => ({
    components: { AButton },
    template: '<a-button type="primary">Button</a-button>',
  }));
