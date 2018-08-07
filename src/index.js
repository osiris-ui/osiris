import row from './row.vue';
import col from './col.vue';

const components = [
  row,
  col,
];

function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  row,
  col,
};
