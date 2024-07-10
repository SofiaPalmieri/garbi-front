module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '@stylistic/jsx'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'unused-imports', '@stylistic/jsx', '@stylistic/js'],
  rules: {
    "@stylistic/js/object-curly-newline": ["error", "always"],
    "@stylistic/js/indent": ["warn", 2, { "ObjectExpression": 1 }],
    "@stylistic/js/object-property-newline": "error",
    "@stylistic/js/newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "@stylistic/js/quotes": ["error", "single"],
    "@stylistic/js/jsx-quotes": ["error", "prefer-single"],
    "@stylistic/jsx/jsx-closing-bracket-location": 1,
    "@stylistic/jsx/jsx-indent":  ["warn", 2],
    "@stylistic/jsx/jsx-indent-props": [2,2],
    '@stylistic/js/object-curly-newline': ['error', 'always'],
    '@stylistic/jsx/jsx-first-prop-new-line': [1, 'always'],
    '@stylistic/jsx/jsx-max-props-per-line': [1, { maximum: 1 }],
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
