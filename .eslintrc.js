module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': [0 ,'error', 'windows'],
    "global-require": "off",
    "import/no-unresolved": "off",
    "no-underscore-dangle": "off",
    "no-new-func": "off",
    "no-param-reassign": "off",
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
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
