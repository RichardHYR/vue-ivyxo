import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// //快速点击插件
// import fastClick from "fastClick";
//图片懒加载
import VueLazyLoad from 'vue-lazyload'
import component from './components'
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import './style/common.css'
import { isNotNullORBlank, getStore } from "./utils/utils";

Vue.use(VueQuillEditor)
Vue.use(VueLazyLoad)
Vue.use(component)
Vue.use(ElementUI)
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
// // 加载FastClick
// fastClick.attach(document.body)

//解决二级路由跳转的报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
    if (isNotNullORBlank(getStore('user_info'))) { // 查询本地存储信息是否已经登陆
      next();
    } else {
      next({
        path: '/login', // 未登录则跳转至login页面
        query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
        });
    }
  } else {
    next();
  }
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
