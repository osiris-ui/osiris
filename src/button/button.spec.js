import { mount } from '@vue/test-utils';
import Button from './button.vue';

describe('Button', () => {
  let wrapper;

  const reset = () => wrapper.setProps({
    type: 'default',
    nativeType: 'button',
    disabled: false,
  });

  beforeAll(() => {
    wrapper = mount(Button);
  });

  afterEach(reset);

  it('should be a default button at startup', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('a-button', 'a-button--default');
  });

  it('should be a primary button', () => {
    wrapper.setProps({
      type: 'primary',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('a-button--primary');
  });

  it('should have a nativeType submit', () => {
    wrapper.setProps({
      nativeType: 'submit',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.attributes().type).toBe('submit');
  });

  it('should be disabled', () => {
    wrapper.setProps({
      disabled: true,
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.attributes().disabled).toBeTruthy();
  });

  it('should emit click event', () => {
    wrapper.findAll('button').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
