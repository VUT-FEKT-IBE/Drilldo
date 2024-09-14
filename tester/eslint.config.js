import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

import { includeIgnoreFile } from '@eslint/compat'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default [
  ...pluginVue.configs['flat/recommended'],
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  includeIgnoreFile(gitignorePath),
  {
    rules: {
      'no-extra-semi': 'error',
      'no-unused-vars': 'error',
      'prefer-const': 'error',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
]
