module.exports = {
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    // ---------------------------------------
    // Dropdown click away listener 만들면서 off
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    // ---------------------------------------
    'no-console': ['off', {
      allow: ['error']
    }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': ['warn', {
      additionalHooks: 'useRecoilCallback'
    }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    // only use arrow-function component
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function'
    }],
    'react/react-in-jsx-scope': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'index'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      },
      'newlines-between': 'always'
    }]
  }
};