import header from './Header'
import editor from './Editor'
import loginInfo from './LoginInfo'


export default {
  install(Vue) {
    Vue.component(header.name, header)
    Vue.component(editor.name, editor)
    Vue.component(loginInfo.name, loginInfo)
  }
}
