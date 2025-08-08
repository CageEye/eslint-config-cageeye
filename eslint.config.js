import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'
export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  // ESLint Stylistic flat recommended preset (enables core + JSX stylistic rules)
  // 1) Base stylistic rules (includes JSX set when enabled later)
  stylistic.configs['recommended-flat'],

  // 2) Your style overlay (keeps config DRY across projects)
  stylistic.configs.customize({
    jsx: true,          // enable JSX-focused stylistic rules
    quotes: 'single',   // align with your codebase
    semi: true,        // no semicolons
    indent: 2,       // optional; we disable the rule below due to recursion bug
    // further options if desired: commaDangle, arrowParens, braceStyle, etc.
  }),
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ...pluginReact.configs.flat.recommended,
  },
  reactRefresh.configs.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'react-hooks': reactHooks,
      '@stylistic': stylistic,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'prefer-destructuring': ['error', { object: true, array: false }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  globalIgnores([
    'dist/*',
    'node_modules/*',
    '.next/*',
    'public/*',
  ]),
])
