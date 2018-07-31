<script>
export default {
  name: 'aRow',
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

  // computed: {
  //   style() {
  //     const margin = `-${(this.gutter / 2)}px`;

  //     return {
  //       marginLeft: margin,
  //       marginRight: margin,
  //     };
  //   },
  // },

  render(h) {
    return h(this.tag, {
      class: [
        'a-row',
        `is-justify-${this.justify}`,
        `is-align-${this.align}`,
        `is-content-${this.content}`,
        `is-direction-${this.direction}`,
        `is-${this.wrap}`,
      ],
      // style: this.style,
    }, this.$slots.default);
  },
};
</script>
