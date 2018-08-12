module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    'import/extensions': 0,
    'global-require': 0,
    "no-param-reassign": 0,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'no-array-constructor': 0,
    'no-new-object': 0,
    'func-names': 1,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'vue/require-default-prop': 0,
  },
  globals: {},
}
