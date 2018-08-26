import { mount } from '@vue/test-utils';
import Button from './button.vue';

describe('Button', () => {
  let wrapper;

  const reset = () => wrapper.setProps({
    type: 'default',
    nativeType: 'button',
    size: 'normal',
    round: false,
    circle: false,
    disabled: false,
  });

  beforeAll(() => {
    wrapper = mount(Button);
  });

  afterEach(reset);

  it('should be a default button at startup', () => {
    const defaultClasses = ['o-button', 'o-button--default', 'o-button--normal'];

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toEqual(defaultClasses);
  });

  it('should be a primary button', () => {
    wrapper.setProps({
      type: 'primary',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-button--primary');
  });

  it('should be a secondary button', () => {
    wrapper.setProps({
      type: 'secondary',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-button--secondary');
  });

  it('should be a info button', () => {
    wrapper.setProps({
      type: 'info',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-button--info');
  });

  it('should be a success button', () => {
    wrapper.setProps({
      type: 'success',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-button--success');
  });

  it('should be a warning button', () => {
    wrapper.setProps({
      type: 'warning',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-button--warning');
  });

  it('should be a danger button', () => {
    wrapper.setProps({
      type: 'danger',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-button--danger');
  });

  it('should be a text button', () => {
    wrapper.setProps({
      type: 'text',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-button--text');
  });

  it('should be a mini button', () => {
    wrapper.setProps({
      size: 'mini',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-button--mini');
  });

  it('should be a small button', () => {
    wrapper.setProps({
      size: 'small',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-button--small');
  });

  it('should be a normal button', () => {
    wrapper.setProps({
      size: 'normal',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-button--normal');
  });

  it('should be a large button', () => {
    wrapper.setProps({
      size: 'large',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-button--large');
  });

  it('should be a round button', () => {
    wrapper.setProps({
      round: true,
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('is-round');
  });

  it('should be a circle button', () => {
    wrapper.setProps({
      circle: true,
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('is-circle');
  });

  it('should be a plain button', () => {
    wrapper.setProps({
      plain: true,
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('is-plain');
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

  it('should render default slot', () => {
    wrapper = mount(Button, {
      slots: {
        default: 'Default Button',
      },
    });

    expect(wrapper.text()).toBe('Default Button');
  });
});
