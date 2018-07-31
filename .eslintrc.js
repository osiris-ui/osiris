module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
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
  },
  globals: {}
}
