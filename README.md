# eslint-config-kalle

![npm-version](https://img.shields.io/npm/v/eslint-config-kalle)

Inspired by [wesbos/eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)

## Usage

1. Install needed packages
```
npx install-peersdeps --dev eslint-config-kalle 
```
2. Create a `.eslintrc.js` file in project's root directory. Your `.eslintrc.js` file should look like this:
```
{
  "extends": ["kalle"]
}
```
For typescript project, use `kalle/typescript`
```
module.exports = {
  extends: ['kalle/typescript']
}
```
3. If you want to format with `prettier`, you should create a `.prettirerc.js` file. It should look like this:
```
module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  semi: false,
};
```
