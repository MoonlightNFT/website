module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    // 'tailwindcss', // makes linting very slow
  ],
  extends: [
    'standard',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    // 'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // "plugin:prettier/recommended",
    // 'plugin:node/recommended',
    'plugin:react/recommended',
    // 'plugin:tailwindcss/recommended', // makes linting very slow
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },
  rules: {
    // 1 is 'warning', 2 is 'error' (error prevents compiling)
    semi: [1, 'never'],
    'comma-dangle': [1, 'always-multiline'],
    'consistent-return': 'warn',
    'import/first': 'off',
    'import/no-extraneous-dependencies': [1, {
      devDependencies: false, optionalDependencies: false, peerDependencies: false,
    }],
    'max-classes-per-file': 'off',
    'max-len': [1, { code: 200 }],
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-param-reassign': 0,
    // funky react stuff
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 1,

    // jsx ally
    'jsx-a11y/label-has-associated-control': 'warn',

    // typescripts
    'import/extensions': 1,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,

    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-unsafe-assignment': 1,
    '@typescript-eslint/no-unsafe-call': 1,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,

    // tailwindcss
    // 'tailwindcss/no-custom-classname': 0,
  },
}
