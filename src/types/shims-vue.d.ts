import { ComponentOptions, ComponentCustomOptions, ComponentCustomProperties } from 'vue'

export {}

declare module 'vue' {
  /**
   * Vue 实例化参数
   */
  interface ComponentOptions {}

  /**
   * 自定义 Vue 组件的选项
   */
  interface ComponentCustomOptions {}

  /**
   * 自定义 Vue 组件属性
   */
  interface ComponentCustomProperties {}
}
