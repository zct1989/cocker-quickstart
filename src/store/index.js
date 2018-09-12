import Vue from 'vue'
import Vuex from 'vuex'

import common from '~/store/common'
import layout from '~/store/layout'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    ...common,
    modules: {
      layout
    }
  })

  return Store
}
