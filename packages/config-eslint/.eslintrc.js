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
    'jsdoc',
    'eslint-plugin-tsdoc',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jsdoc/recommended-typescript-error',
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
    'jsdoc/check-param-names': [
      'error',
      {
        checkDestructured: false,
      },
    ],
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['remarks', 'typeParam'],
      },
    ],
    'jsdoc/require-description': [
      'error',
      {
        contexts: [
          'ArrowFunctionExpression',
          'ClassDeclaration',
          'ClassExpression',
          'FunctionDeclaration',
          'FunctionExpression',
          'MethodDefinition',
          'PropertyDefinition',
          'VariableDeclaration',
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSPropertySignature',
          'TSMethodSignature',
        ],
      },
    ],
    'jsdoc/require-hyphen-before-param-description': ['error', 'always'],
    'jsdoc/require-jsdoc': [
      'error',
      {
        publicOnly: true,
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
        contexts: [
          'PropertyDefinition',
          'VariableDeclaration',
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSPropertySignature',
          'TSMethodSignature',
        ],
        checkConstructors: false,
      },
    ],
    'jsdoc/require-param': [
      'error',
      {
        checkDestructuredRoots: false,
      },
    ],
    'jsdoc/tag-lines': [
      'error',
      'always',
      {
        startLines: 1,
        applyToEndTag: false,
      },
    ],
    'jsdoc/sort-tags': [
      'error',
      {
        reportIntraTagGroupSpacing: false,
      },
    ],
    'jsdoc/require-returns': ['off'],
    'tsdoc/syntax': 'error',
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
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      rules: {
        'jsdoc/require-param-type': ['error'],
        'jsdoc/require-returns': ['error'],
        'jsdoc/require-returns-type': ['error'],
        'jsdoc/no-types': ['off'],
      },
    },
  ],
};
