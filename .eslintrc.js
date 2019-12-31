module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/newline-after-import': 0,
    'no-multi-assign': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': [0 ,'error', 'windows'],
    "no-underscore-dangle": "off",
    "no-new-func": "off",
    "arrow-body-style": "off",
    "dot-notation": "off",
    "no-else-return": "off",
    "consistent-return": "off",
    "object-curly-newline": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off",
    "import/no-extraneous-dependencies": "off",
    "no-template-curly-in-string": "off"
  }
}
