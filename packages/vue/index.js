const INLINE_ELEMENTS = [
  'a',
  'abbr',
  'audio',
  'b',
  'bdi',
  'bdo',
  'canvas',
  'cite',
  'code',
  'data',
  'del',
  'dfn',
  'em',
  'i',
  'iframe',
  'ins',
  'kbd',
  'label',
  'map',
  'mark',
  'noscript',
  'object',
  'output',
  'picture',
  'q',
  'ruby',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'time',
  'u',
  'var',
  'video'
]

const VUE_INLINE_ELEMENTS = ['i18n', 'template']

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
    '@alexigasse/eslint-config',
    'plugin:vue/recommended'
  ],
  plugins: ['vue'],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    'vue/no-v-html': 'off',
    'vue/no-parsing-error': ['error', {
      'x-invalid-end-tag': false
    }],

    // Allow more inline element
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: [...VUE_INLINE_ELEMENTS, ...INLINE_ELEMENTS]
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: [...VUE_INLINE_ELEMENTS, ...INLINE_ELEMENTS],
      allowEmptyLines: false
    }]
  }
}
