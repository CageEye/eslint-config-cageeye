// index.js
export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // For projects with a tsconfig.json:
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'simple-import-sort'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', //
    'plugin:react/recommended', 
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' 
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    react: {
      version: 'detect'
    },
  },
};