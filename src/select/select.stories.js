import { storiesOf } from '@storybook/vue';

import OSelect from './Select.vue';


storiesOf('Select', module)
  .add('Basic Usage', () => ({
    components: { OSelect },
    data() {
      return {
        options: [
          {
            label: 'São Paulo',
            value: 'São Paulo',
          },
          {
            label: 'London',
            value: 'London',
          },
          {
            label: 'Berlin',
            value: 'Berlin',
          },
          {
            label: 'New York',
            value: 'New York',
          },
        ],
      };
    },
    template: `<o-select :options="options">
    </o-select>`,
  }))
  .add('Multiple Selection', () => ({
    components: { OSelect },
    data() {
      return {
        options: [
          {
            label: 'São Paulo',
            value: 'São Paulo',
          },
          {
            label: 'London',
            value: 'London',
          },
          {
            label: 'Berlin',
            value: 'Berlin',
          },
          {
            label: 'New York',
            value: 'New York',
          },
        ],
      };
    },
    template: `<o-select v-model="selected" :options="options" multiple>
      </o-select>`,
  }));
