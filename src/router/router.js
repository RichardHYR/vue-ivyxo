import App from '../App'

const index = r => require.ensure([], () => r(require('../views/Index')), 'index')
const register = r => require.ensure([], () => r(require('../views/Register')), 'register')
const login = r => require.ensure([], () => r(require('../views/Login')), 'login')
const info = r => require.ensure([], () => r(require('../views/Info')), 'info')
const setting = r => require.ensure([], () => r(require('../views/Setting')), 'setting')
const note = r => require.ensure([], () => r(require('../views/NoteInfo')), 'noteInfo')
const noteList = r => require.ensure([], () => r(require('../views/NoteList')), 'noteList')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [
        //地址为空时跳转home页面 
        {
            path: '',
            redirect: '/index'
        },
        {
            path: '/index',
            component: index
        },
        {
            path: '/register',
            component: register
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/info',
            component: info
        },
        {
            path: '/setting',
            component: setting
        },
        {
            path: '/note',
            component: note
        },
        {
            path: '/noteList',
            component: noteList
        }
    ]
}]