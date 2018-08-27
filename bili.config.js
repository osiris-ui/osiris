const vue = require('rollup-plugin-vue');

module.exports = {
  globals: {
    lodash: 'lodash'
  },
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
