module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    '@next/eslint-plugin-next',
    'prefer-arrow-functions',
    'import',
    'jsx-a11y',
    'eslint-plugin-tsdoc',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/jsx-sort-props': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['./**'],
      rules: {
        'no-var': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
      },
    },
  ],
};
