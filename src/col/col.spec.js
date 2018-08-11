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
      const expected = ['a-col-24', 'a-col-offset-0'];
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
          'a-col-1',
          'a-col-offset-7',
          'a-col-xs-2',
          'a-col-sm-3',
          'a-col-md-4',
          'a-col-lg-5',
          'a-col-xl-6',
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
