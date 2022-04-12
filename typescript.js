module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    // Layer in all the JS Rules
    './.eslintrc.js',
  ],
  // Then we add our own custom typescript rules
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      // then add some extra good stuff for Typescript
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended', // Uses rules from `@typescript-eslint/eslint-plugin`,
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // Layer in all the JS Rules
        './.eslintrc.js',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        // This allows us to use async function on addEventListener(). Discussion: https://twitter.com/wesbos/status/1337074242161172486
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': [
          'warn',
          {
            ignoreDeclarationMerge: true,
          },
        ],
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
}
