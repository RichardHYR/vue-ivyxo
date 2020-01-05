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
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Register'),
      meta: {
        keepAlive: false, // 需要被缓存
        // helpType: 1
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login'),
      meta: {
        keepAlive: false, // 需要被缓存
        // helpType: 1
      },
    },
    {
      path: '/info',
      name: 'Info',
      component: () => import('@/views/Info'),
      meta: {
        keepAlive: false, // 需要被缓存
        // helpType: 1
      },
    },
    {
      path: '/noteInfo',
      name: 'NoteInfo',
      component: () => import('@/views/NoteInfo'),
      meta: {
        keepAlive: false, // 需要被缓存
        // helpType: 1
      },
    },
    {
      path: '/noteList',
      name: 'NoteList',
      component: () => import('@/views/NoteList'),
      meta: {
        keepAlive: false, // 需要被缓存
        // helpType: 1
      },
    },
  ]
})
