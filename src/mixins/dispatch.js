export default {
  methods: {
    dispatch(componentName, eventName, data) {
      let parent = this.$parent || this.$root;
      let { name } = parent.$options;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          const newName = parent.$options.name;
          name = newName;
        }
      }

      if (parent) {
        parent.$emit(eventName, data);
      }
    },
  },
};
