import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/Index'),
      meta: {
        keepAlive: false, // 需要被缓存
        // helpType: 1
      },
    },
  ]
})
