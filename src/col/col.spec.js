import { shallowMount } from '@vue/test-utils';
import Col from './col.vue';

describe('Col', () => {
  let wrapper;
  describe('when pass no prop', () => {
    beforeEach(() => {
      wrapper = shallowMount(Col);
    });

    it('should match with the snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should have default classList', () => {
      const expected = ['o-col-24', 'o-col-offset-0'];
      expect(wrapper.vm.classList).toEqual(expected);
    });
  });

  describe('when pass some props', () => {
    const props = {
      span: 1,
      xs: 2,
      sm: 3,
      md: 4,
      lg: 5,
      xl: 6,
      offset: 7,
    };

    describe(`and the props are ${JSON.stringify(props)}`, () => {
      beforeEach(() => {
        wrapper = shallowMount(Col, {
          propsData: {
            ...props,
          },
        });
      });

      it('should match with the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

      it('should have exactly expected classList', () => {
        const expected = [
          'o-col-1',
          'o-col-offset-7',
          'o-col-xs-2',
          'o-col-sm-3',
          'o-col-md-4',
          'o-col-lg-5',
          'o-col-xl-6',
        ];

        expect(wrapper.vm.classList).toEqual(expected);
      });
    });

    describe('and the props are another tag like section', () => {
      beforeEach(() => {
        wrapper = shallowMount(Col, {
          propsData: {
            tag: 'section',
          },
        });
      });

      it('should match with the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });
    });
  });
});
