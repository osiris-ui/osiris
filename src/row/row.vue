<script>
export default {
  name: 'ORow',
  props: {
    gutter: {
      type: Number,
      default: 20,
    },

    justify: {
      type: String,
      default: 'flex-start',
    },

    align: {
      type: String,
      default: 'flex-start',
    },

    content: {
      type: String,
      default: 'flex-start',
    },

    direction: {
      type: String,
      default: 'row',
    },

    wrap: {
      type: String,
      default: 'wrap',
    },

    tag: {
      type: String,
      default: 'div',
    },
  },

  computed: {
    style() {
      const margin = `-${(this.gutter / 2)}px`;

      return {
        marginLeft: margin,
        marginRight: margin,
      };
    },
    classList() {
      return [
        'o-row',
        `is-justify-${this.justify}`,
        `is-align-${this.align}`,
        `is-content-${this.content}`,
        `is-direction-${this.direction}`,
        `is-${this.wrap}`,
      ];
    },
  },

  render(h) {
    return h(this.tag, {
      class: this.classList,
      style: this.style,
    }, this.$slots.default);
  },
};
</script>
