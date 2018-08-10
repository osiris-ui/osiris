import row from './row';
import col from './col';
import button from './button';

const components = [
  row,
  col,
  button,
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
  button,
};
