<script>
export default {
  name: 'OCol',
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
    classList() {
      return [...this.spanClasses, ...this.offsetClasses, ...this.sizeClasses];
    },
    spanClasses() {
      return typeof this.span === 'number' ? [`o-col-${this.span}`] : [];
    },
    offsetClasses() {
      return (
        typeof this.offset === 'number'
          ? [`o-col-offset-${this.offset}`]
          : []
      );
    },
    sizeClasses() {
      const sizeProps = ['xs', 'sm', 'md', 'lg', 'xl'];
      return sizeProps.reduce((classes, size) => {
        const newClasses = this.getSizeClasses(size);
        if (newClasses) {
          classes = [...classes, ...newClasses];
        }
        return classes;
      }, []);
    },
  },
  methods: {
    getSizeClasses(size) {
      switch (typeof this[size]) {
        case 'number':
          return [`o-col-${size}-${this[size]}`];
        case 'object':
          return this.getSizePropsClasses({
            colSize: size,
            sizeProps: this[size],
          });
        default:
          return [];
      }
    },
    getSizePropsClasses({ colSize, sizeProps = {} }) {
      const sizePropsKeys = Object.keys(sizeProps);
      return sizePropsKeys.map(
        prop => (prop !== 'span'
          ? `o-col-${colSize}-${prop}-${sizeProps[prop]}`
          : `o-col-${colSize}-${sizeProps[prop]}`),
      );
    },
  },
  render(h) {
    return h(
      this.tag,
      {
        class: this.classList,
        style: this.style,
      },
      this.$slots.default,
    );
  },
};
</script>
