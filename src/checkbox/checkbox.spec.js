import { mount } from '@vue/test-utils';
import checkbox from './checkbox.vue';

describe('checkbox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(checkbox);
    wrapper.setProps({
      size: 'medium',
    });
  });

  describe('when is default', () => {
    it('should have expected classes', () => {
      expect(wrapper.classes())
        .toEqual(['o-checkbox', 'o-checkbox--medium']);
    });
  });

  describe('when have default params filled', () => {
    beforeEach(() => {
      wrapper.setProps({
        value: '1',
        modelValue: '1',
        label: 'label',
        name: 'name',
      });
    });

    it('should have a name attr', () => {
      const { name } = wrapper.find('input')
        .attributes();
      expect(name).toEqual('name');
    });

    it('should have a value attr', () => {
      const input = wrapper.find('input');
      const { value } = input.attributes();
      expect(value).toEqual('1');
    });

    it('should have a label', () => {
      const label = wrapper.find('.o-checkbox__label');
      expect(label.text()).toEqual('label');
    });
  });

  describe('when is disabled', () => {
    beforeEach(() => {
      wrapper.setProps({
        disabled: true,
      });
    });

    it('should have is-disabled class', () => {
      expect(wrapper.classes())
        .toEqual(expect.arrayContaining(['is-disabled']));
    });
  });

  describe('when is checked', () => {
    beforeEach(() => {
      wrapper.setProps({
        modelValue: '1',
        value: '1',
      });
    });

    it('should have is-checked class', () => {
      expect(wrapper.classes())
        .toEqual(expect.arrayContaining(['is-checked']));
    });
  });

  describe('when have another size', () => {
    beforeEach(() => {
      wrapper.setProps({
        size: 'large',
      });
    });

    it('should have o-checkbox--large class', () => {
      expect(wrapper.classes())
        .toEqual(expect.arrayContaining(['o-checkbox', 'o-checkbox--large']));
    });
  });
});
