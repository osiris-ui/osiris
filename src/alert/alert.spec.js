import { mount } from '@vue/test-utils';
import alert from './alert.vue';

describe('alert', () => {
  let wrapper;

  const reset = () => wrapper.setProps({
    type: 'primary',
    size: 'normal',
    round: false,
  });

  beforeAll(() => {
    wrapper = mount(alert);
  });

  afterEach(reset);

  it('should be a primary alert at startup', () => {
    const defaultClasses = ['o-alert', 'o-alert--primary', 'o-alert--normal'];

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toEqual(defaultClasses);
  });

  it('should be a primary alert', () => {
    wrapper.setProps({
      type: 'primary',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-alert--primary');
  });

  it('should be a secondary alert', () => {
    wrapper.setProps({
      type: 'secondary',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-alert--secondary');
  });

  it('should be a info alert', () => {
    wrapper.setProps({
      type: 'info',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-alert--info');
  });

  it('should be a success alert', () => {
    wrapper.setProps({
      type: 'success',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-alert--success');
  });

  it('should be a warning alert', () => {
    wrapper.setProps({
      type: 'warning',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-alert--warning');
  });

  it('should be a danger alert', () => {
    wrapper.setProps({
      type: 'danger',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-alert--danger');
  });

  it('should be a mini alert', () => {
    wrapper.setProps({
      size: 'mini',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-alert--mini');
  });

  it('should be a small alert', () => {
    wrapper.setProps({
      size: 'small',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-alert--small');
  });

  it('should be a normal alert', () => {
    wrapper.setProps({
      size: 'normal',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-alert--normal');
  });

  it('should be a large alert', () => {
    wrapper.setProps({
      size: 'large',
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('o-alert--large');
  });

  it('should be a round alert', () => {
    wrapper.setProps({
      round: true,
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('is-round');
  });
});
