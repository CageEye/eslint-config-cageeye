import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";
export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactRefresh.configs.recommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "react-hooks": reactHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'prefer-destructuring': ['error', { object: true, array: false }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'space-infix-ops': 'error',
      'semi': ['error', 'always'],
      'semi-spacing': ['error', { 'before': false, 'after': true }],
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
    },
  },
  globalIgnores([
    "dist/*",
    "node_modules/*",
    ".next/*",
    "public/*",
  ]),
]);
