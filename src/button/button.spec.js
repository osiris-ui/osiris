import { shallowMount } from '@vue/test-utils';
import Button from './button.vue';

describe('Button', () => {
  let wrapper;
  describe('when is a default button', () => {
    beforeEach(() => {
      wrapper = shallowMount(Button);
    });

    it('should be match with the snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('when is a submit button', () => {
    beforeEach(() => {
      wrapper = shallowMount(Button, {
        propsData: {
          type: 'submit',
        },
      });
    });

    it('should match with the snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('when pass an onClick Function', () => {
    const onClick = jest.fn();

    beforeEach(() => {
      wrapper = shallowMount(Button, {
        propsData: {
          onClick,
        },
      });
    });

    describe('when button is clicked', () => {
      it('should call the onclick function', () => {
        wrapper.findAll('button').trigger('click');
        expect(onClick).toBeCalled();
      });
    });
  });
});
