import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
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

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
