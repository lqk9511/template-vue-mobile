import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerConfig } from './routerConfig'
import { setDocumentTitle } from 'utils/dom'
Vue.use(VueRouter)

export interface RouterMeta {
  title: string
}

const router = new VueRouter({
  routes: routerConfig
})

router.beforeEach((to, from, next) => {
  const meta: RouterMeta = to.meta
  setDocumentTitle(meta.title)
  next()
})

export default router
