module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-html'
  ],
  defaultSeverity: 'warning',
  plugins: ['stylelint-order'],
  rules: {},
  overrides: [
    {
      files: ['*.html', '**/*.html'],
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['*.vue', '**/*.vue'],
    }
  ]
}
