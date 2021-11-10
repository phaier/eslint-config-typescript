# eslint-config-typescript

ESLint configuration for a TypeScript project.

## Setup

Install package from npm

```
yarn add @phaier/eslint-config-typescript --dev
```

Create a `.eslintrc.js` file in the project folder with the following contents.

```js
module.exports = {
  root: true,
  extends: ['@phaier/eslint-config-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },

  ignorePatterns: ['node_modules/'],
};
```


## License

[MIT](LICENSE) © Phaier
