import row from './row';
import col from './col';

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
