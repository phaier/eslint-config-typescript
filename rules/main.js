module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],

  rules: {
    // default export の利用は推奨しない
    'import/prefer-default-export': ['off'],

    // console の利用は制限しない
    'no-console': ['off'],

    // window.alert の利用は制限しない
    'no-alert': ['off'],

    // インクリメントの利用に関しては no-plusplus に説明されているリスクを考慮して残す
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    // トランスパイルすれば拡張子が変わるので ts, tsx の拡張子は基本的に指定しない
    'import/extensions': [
      'error',
      'never',
      {
        ts: 'never',
        svg: 'always',
        graphql: 'always',
      },
    ],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
  },
};
