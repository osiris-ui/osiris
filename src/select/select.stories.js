import { storiesOf } from '@storybook/vue';

import OSelect from './Select.vue';


storiesOf('Select', module)
  .add('default', () => ({
    components: { OSelect },
    template: `<o-select>

    </o-select>`,
  }));
