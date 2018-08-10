import { configure } from '@storybook/vue';
import Vue from 'vue';

import '../src/atlas-style/dist/atlas-style.css';

// Import your custom components.

// Install Vue plugins.
// Vue.use(Vuex);

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
