import { mount } from '@vue/test-utils';
import Input from './input.vue';

describe('Input', () => {
  let wrapper;

  const reset = () => wrapper.setProps({
    name: '',
    placeholder: '',
    width: '300px',
    type: 'text',
    size: 'normal',
    value: '',
    readonly: false,
    autofocus: false,
    disabled: false,
    maxlength: Infinity,
    minlength: 0,
    max: Infinity,
    min: 0,
    prefixIcon: '',
    suffixIcon: '',
    isSuccess: false,
    isError: false,
  });

  beforeAll(() => {
    wrapper = mount(Input);
  });

  afterEach(reset);

  it('should be a default input at startup', () => {
    const defaultClasses = ['o-input', 'o-input--normal'];

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toEqual(defaultClasses);
  });

  it('should be a large input', () => {
    wrapper.setProps({
      size: 'large',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-input--large');
  });

  it('should be a small input', () => {
    wrapper.setProps({
      size: 'small',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-input--small');
  });

  it('should be a mini input', () => {
    wrapper.setProps({
      size: 'mini',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-input--mini');
  });

  it('should be disabled', () => {
    wrapper.setProps({
      disabled: true,
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('is-disabled');
    expect(wrapper.html()).toContain('disabled=');
  });

  it('should be readonly', () => {
    wrapper.setProps({
      readonly: true,
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.html()).toContain('readonly=');
  });

  it('should have a prefixIcon', () => {
    wrapper.setProps({
      prefixIcon: 'o-icon o-icon-search',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.html()).toContain('o-input__prefix');
    expect(wrapper.html()).toContain('<i', 'o-icon', 'o-icon-search', 'o-icon--prefix');
  });

  it('should have a suffixIcon', () => {
    wrapper.setProps({
      suffixIcon: 'o-icon o-icon-search',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-input__suffix');
    expect(wrapper.html()).toContain('<i', 'o-icon', 'o-icon-search', 'o-icon--suffix');
  });

  it('should have a success status', () => {
    wrapper.setProps({
      isSuccess: true,
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('is-success');
    expect(wrapper.html()).toContain('<i', 'o-icon', 'o-icon-check', 'o-icon--suffix');
  });

  it('should have a error status', () => {
    wrapper.setProps({
      isError: true,
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('is-error');
    expect(wrapper.html()).toContain('<i', 'o-icon', 'o-icon-x', 'o-icon--suffix');
  });

  it('should emit a focus event', () => {
    wrapper.findAll('input').trigger('focus');

    expect(wrapper.emitted().focus).toBeTruthy();
  });

  it('should emit a blur event', () => {
    wrapper.findAll('input').trigger('blur');

    expect(wrapper.emitted().blur).toBeTruthy();
  });

  it('should emit a input event', () => {
    wrapper.setProps({
      value: 'abc',
    });
    wrapper.findAll('input').trigger('input');

    expect(wrapper.vm.$data.currentValue).toBe('abc');
    expect(wrapper.emitted().input).toBeTruthy();
  });

  it('should have a suffix icon through slot', () => {
    wrapper = mount(Input, {
      slots: {
        suffix: '<i class="o-icon o-icon-calendar"></i>',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-input__suffix');
    expect(wrapper.html()).toContain('<i', 'o-icon', 'o-icon-calendar', 'o-icon--suffix');
  });

  it('should have a prefix icon through slot', () => {
    wrapper = mount(Input, {
      slots: {
        prefix: '<i class="o-icon o-icon-calendar"></i>',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-input__prefix');
    expect(wrapper.html()).toContain('<i', 'o-icon', 'o-icon-calendar', 'o-icon--prefix');
  });
});
