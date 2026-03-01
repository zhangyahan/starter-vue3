import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    formatters: {
      // 使用 stylelint 进行格式化
      css: false,
      html: true,
    },
  },
  {
    rules: {
      curly: ['error', 'all'],
    },
  },
)
