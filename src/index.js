import Row from './row';
import Col from './col';
import Button from './button';
import Input from './input';
import Radio from './radio';
import Form from './form';
import FormItem from './formItem';
import Checkbox from './checkbox';
import Select from './select';

const components = [
  Row,
  Col,
  Button,
  Input,
  Radio,
  Form,
  FormItem,
  Checkbox,
  Select,
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
  Row,
  Col,
  Button,
  Input,
  Radio,
  Form,
  FormItem,
  Checkbox,
  Select,
};
