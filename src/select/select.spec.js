import { mount } from '@vue/test-utils';
import Select from './Select.vue';

describe('Select', () => {
  let wrapper;

  const reset = () => {
    wrapper.setProps({
      options: [
        {
          label: 'São Paulo',
          value: 'São Paulo',
        }, {
          label: 'New York',
          value: 'New York',
        }, {
          label: 'New York',
          value: 'Berlin',
        }],
      multiple: false,
      filterable: false,
      value: '',
      clearable: false,
    });

    wrapper.setData({
      currentValue: '',
    });
  };

  beforeAll(() => {
    wrapper = mount(Select);
  });

  afterEach(reset);

  it('should be a default select at startup', () => {
    const defaultClasses = ['o-select', 'o-select--normal'];
    const options = wrapper.findAll('.o-select__list-item');

    expect(options.length).toEqual(0);
    expect(wrapper.classes()).toEqual(defaultClasses);
    expect(wrapper.isVisible()).toEqual(true);
  });

  it('should select appear options when trigger space', () => {
    wrapper.trigger('keydown.space');
    const options = wrapper.findAll('.o-select__list-item');
    expect(options.length).toEqual(3);
  });

  it('should select appear options when trigger click', () => {
    wrapper.trigger('click');
    const options = wrapper.findAll('.o-select__list-item');
    expect(options.length).toEqual(3);
  });

  it('should select São Paulo when using keydown events', () => {
    wrapper.trigger('click');
    wrapper.find('.o-select__list-item').trigger('click');
    expect(wrapper.vm.$data.currentValue).toEqual('São Paulo');
  });

  it('should emit change event', () => {
    wrapper.trigger('click');
    wrapper.find('.o-select__list-item').trigger('click');
    expect(wrapper.emitted().change).toBeTruthy();
  });
});
