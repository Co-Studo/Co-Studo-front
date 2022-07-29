module.exports = {
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/prop-types': 'off',
    // only use arrow-function component
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
};
