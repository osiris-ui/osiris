import { shallowMount } from '@vue/test-utils';
import Row from './row.vue';

describe('Row', () => {
  let wrapper;

  describe('when pass no props', () => {
    beforeEach(() => {
      wrapper = shallowMount(Row);
    });

    it('should match with the snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should have expected classList', () => {
      const expected = [
        'o-row',
        'is-justify-flex-start',
        'is-align-flex-start',
        'is-content-flex-start',
        'is-direction-row',
        'is-wrap',
      ];
      expect(wrapper.vm.classList).toEqual(expected);
    });
  });

  describe('when pass some props', () => {
    const props = {
      justify: 'flex-end',
      align: 'flex-end',
      content: 'center',
      direction: 'column',
      wrap: 'no-wrap',
    };

    describe(`and the props are ${JSON.stringify(props)}`, () => {
      beforeEach(() => {
        wrapper = shallowMount(Row, {
          propsData: props,
        });
      });

      it('should match with the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

      it('should have an expected classList', () => {
        const expected = [
          'o-row',
          'is-justify-flex-end',
          'is-align-flex-end',
          'is-content-center',
          'is-direction-column',
          'is-no-wrap',
        ];

        expect(wrapper.vm.classList).toEqual(expected);
      });
    });

    describe('and the prop is another tag like section', () => {
      beforeEach(() => {
        wrapper = shallowMount(Row, {
          propsData: { tag: 'section' },
        });
      });

      it('should match with the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });
    });
  });
});
