import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    formatters: {
      // 使用 stylelint 进行格式化
      css: false,
      html: true,
      prettierOptions: {
        printWidth: 100,
        tabWidth: 2,
        singleQuote: true,
        semi: false,
        jsxSingleQuote: true,
      },
    },
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
      jsx: true,
    },
    ignores: [
      '**/dist',
      '**/public',
      '**/node_modules',
      '**/uni_modules',
      '**/libs',
      '**/static',
      '**/.cache',
      '**/coverage',
      '**/.output',
    ],
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: 1 }],
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'beside',
        multiline: 'below',
      }],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'never',
        selfClosingTag: {
          singleline: 'never',
          multiline: 'never',
        },
      }],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/require-prop-types': ['off'],
      'vue/require-default-prop': ['off'],
      'vue/multi-word-component-names': ['off'],
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
      'vue/no-template-shadow': ['off'],
      'vue/block-order': ['warn', {
        order: [['script', 'template'], 'style'],
      }],
      'vue/v-on-event-hyphenation': ['off'],
      'vue/no-deprecated-v-bind-sync': ['error'],
      'vue/require-explicit-emits': ['warn'],
      'vue/no-v-text-v-html-on-component': ['off'],
      'vue/v-slot-style': ['off'],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/define-macros-order': ['error', {
        order: ['defineOptions', 'defineProps', 'defineEmits', 'defineModel', 'defineSlots'],
      }],
      'vue/prefer-import-from-vue': 'error',
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/no-setup-props-reactivity-loss': 'error',
      'vue/no-ref-object-reactivity-loss': 'error',
      'vue/component-name-in-template-casing': ['error', 'PascalCase', {
        registeredComponentsOnly: false,
        ignores: [],
      }],
    },
  },
  {
    rules: {
      'curly': ['error', 'all'],
      'dot-notation': ['warn'],
      'no-console': ['warn'],

      'style/max-len': ['off'],

      'regexp/no-super-linear-backtracking': ['off'],
      'regexp/no-unused-capturing-group': ['off'],
      'regexp/sort-flags': ['off'],
      'regexp/no-useless-flag': ['off'],

      'unused-imports/no-unused-vars': ['error', {
        caughtErrors: 'none',
        varsIgnorePattern: '^_|ignore|ignored',
        argsIgnorePattern: '^_',
      }],

      'n/prefer-global/process': ['off'],
    },
  },
)
