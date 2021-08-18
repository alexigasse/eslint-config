module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off'
      }
    }
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@alexigasse/eslint-config'
  ],
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/no-v-html': 'off',
    'vue/no-parsing-error': ['error', {
      'x-invalid-end-tag': false
    }]
  }
}
