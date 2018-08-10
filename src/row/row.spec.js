import { shallowMount } from '@vue/test-utils';
import Row from './row.vue';

describe('Row', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Row);
  });

  it('should match with the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
