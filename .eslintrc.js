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
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "quotes": [2, "double", {
      "avoidEscape": true
    }],
    "comma-dangle": ["error", {
      "arrays": "always",
      "objects": "never",
      "imports": "always",
      "exports": "always",
      "functions": "always"
    }]
  }
};
