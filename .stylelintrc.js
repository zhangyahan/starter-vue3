export default {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-html',
  ],
  defaultSeverity: 'warning',
  plugins: [
    'stylelint-less',
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    'selector-class-pattern': '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'deep', 'global', 'slotted'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global', 'slotted'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'include', 'extend', 'if', 'else', 'each', 'for', 'while', 'function', 'return', 'warn', 'error', 'debug', 'use', 'forward', 'content'],
      },
    ],
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],
    'media-query-no-invalid': [
      true,
      {
        severity: 'warning',
      },
    ],
    'declaration-block-no-redundant-longhand-properties': [true, {
      ignoreShorthands: ['inset'], // 允许单独定义位置属性
    }],
  },
  overrides: [
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'media-query-no-invalid': null,
      },
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'media-query-no-invalid': null,
      },
    },
  ],
}
