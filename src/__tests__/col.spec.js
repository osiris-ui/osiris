import { shallowMount } from '@vue/test-utils';
import Col from '../col.vue';

describe('Col', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Col);
  });

  it('should match with the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
