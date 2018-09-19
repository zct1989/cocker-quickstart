import { ApplicationRouter, RouterGuard } from '@cocker/core'

export default ({ Vue }) => {
  ApplicationRouter.registerGuards([
    authentication
  ])
}

/**
 * 身份认证
 */
@RouterGuard({
  path: /^login$/
})
async function authentication({ store, router }) {
  if (!store.token) {
    return '/'
  }
}

