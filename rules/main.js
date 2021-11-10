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
  },
};
