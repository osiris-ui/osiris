import row from './row';
import col from './col';
import button from './button';
import input from './input';
import radio from './radio';
import form from './form';
import formItem from './formItem';

const components = [
  row,
  col,
  button,
  input,
  radio,
  form,
  formItem,
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
  input,
  radio,
  form,
  formItem,
};
