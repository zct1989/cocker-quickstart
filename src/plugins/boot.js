// import something here
// import App from '~/App.vue'
import Cocker from '@cocker/core'
// leave the export, even if you don't use it
export default async ({ store, router }) => {
  // 初始化
  new Cocker({
    router,
    store,
    bootstrap: {
      // 扩展提供器
      provides: () => [],
      // 扩展插件
      plugins: () => [],
      // 扩展指令
      directives: () => [],
      // 扩展过滤器
      filters: () => [],
    },
    // 启动逻辑
    launch
  })
}

/**
 * 系统启动逻辑
 */
async function launch(){

}
