module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@vue/airbnb', 'plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    vueFeatures: { interpolationAsNonHTML: true }
  },
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.html'],
      rules: { 'vue/comment-directive': 'off' }
    }
  ],
  rules: {
    'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-cycle': [2, { maxDepth: 1 }],
    'vue/no-unused-properties': [
      'warn',
      {
        groups: ['props', 'data', 'computed', 'methods', 'setup']
      }
    ],
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-syntax': 'off',
    'vue/new-line-between-multi-line-property': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/v-for-delimiter-style': ['error', 'of'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/no-parsing-error': [
      'error',
      {
        'invalid-first-character-of-tag-name': false
      }
    ]
  }
}
