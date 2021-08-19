module.exports = {
  extends: [
    '@alexigasse/eslint-config-vue',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
  }
}
