<script>
export default {

  name: 'aCol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number,
    offset: {
      type: Number,
      default: 0,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },

  computed: {
    style() {
      const gutter = this.$parent.gutter || 0;
      const padding = `${gutter / 2}px`;

      return {
        paddingLeft: padding,
        paddingRight: padding,
      };
    },
  },

  render(h) {
    const classList = [];

    ['span', 'offset'].forEach((prop) => {
      if (this[prop] || this[prop] === 0) {
        classList.push(prop !== 'span' ? `a-col-${prop}-${this[prop]}` : `a-col-${this[prop]}`);
      }
    });

    ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
      if (typeof this[size] === 'number') {
        classList.push(`a-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        const props = this[size];
        Object.keys(props).forEach((prop) => {
          classList.push(prop !== 'span' ? `a-col-${size}-${prop}-${props[prop]}` : `a-col-${size}-${props[prop]}`);
        });
      }
    });

    return h(this.tag, {
      class: classList,
      style: this.style,
    }, this.$slots.default);
  },
};
</script>

