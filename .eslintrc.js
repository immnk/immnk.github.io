module.exports = {
  plugins: ['css-modules', '@babel'],
  extends: [
    'airbnb',
    'plugin:css-modules/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:eslint-comments/recommended'
  ],
  env: {
    browser: true,
    jest: true
  },

  parser: '@babel/eslint-parser',

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalobjectRestSpread: true
    }
  },

  settings: {
    'import/resolver': {
      alias: [
        ['store', './src/store'],
        ['components', './src/components'],
        ['pages', './src/pages'],
        ['utils', './src/utils']
      ]
    }
  },
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    complexity: ['error', { max: 10 }],
    'consistent-return': 'warn',
    curly: ['error', 'all'],
    'implicit-arrow-linebreak': 'off',
    'import/no-extraneous-dependencies': 'off',
    indent: 'off',
    'jest/no-large-snapshots': ['warn', { maxSize: 200 }],
    // 'jsx-a1ly/anchor-is-valid': 'warn',
    // 'jsx-ally/click-events-have-key-events': 'warn',
    // 'jsx-a1ly/control-has-associated-label': 'warn',
    // 'jsx-a11y/no-autofocus': 'off',
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'max-depth': ['error', { max: 3 }],
    'max-len': ['warn', 120, { ignoreComments: true }, { ignoreTrailingComments: true }],
    'max-lines-per-function': ['warn', { max: 100 }],
    'max-nested-callbacks': ['error', { max: 3 }],
    'newline-per-chained-call': 'off',
    'no-extra-semi': 'warn',
    'no-nested-ternary': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-return-assign': ['error', 'except-parens'],
    'no-underscore-dangle': ['error'],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: false }],
    'object-curly-newline': 'off',
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'padded-blocks': 'off',
    'prefer-promise-reject-errors': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'warn',
    'react/state-in-constructor': ['warn', 'always'],
    'spaced-comment': 'warn'
  }
};
