import header from './Header'
import editor from './Editor'


export default {
  install(Vue) {
    Vue.component(header.name, header)
    Vue.component(editor.name, editor)
  }
}
