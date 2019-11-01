/**
 * {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import('../views/About.vue') // webpackChunkName: "about" 
  }
 */
export const routerConfig = [
  {
    path: '/',
    name: 'Home',
    component: () => import('views/Home'),
    meta: {
      title: '首页'
    }
  }
]
