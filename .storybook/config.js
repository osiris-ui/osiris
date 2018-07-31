import { configure } from '@storybook/vue';
import Vue from 'vue';

import './atlas-style.css';

// Import your custom components.

// Install Vue plugins.
// Vue.use(Vuex);

// Register custom components.

import row from '../src/row.vue';

Vue.component('a-row', row);


function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
