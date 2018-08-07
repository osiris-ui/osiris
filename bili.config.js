const vue = require('rollup-plugin-vue');

module.exports = {
  outDir: 'dist',
  babel: {
    babelrc: false,
  },

  formats: ['es', 'umd', 'umd-min'],

  banner: true,
  css: true,

  plugins: [
    vue({ css: true }),
  ],
};
