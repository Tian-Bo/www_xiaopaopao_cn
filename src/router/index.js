import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let base = `${process.env.BASE_URL}` // 动态获取二级目录

// 登陆
const Login = () => import('../views/home/login')
// 注册
const Register = () => import('../views/home/register')
// 首页
const Home = () => import('../views/home/index')


// 账户主页
const accountHome = () => import('../views/home/accountHome')
// 账户设置
const accountSetting = () => import('../views/home/accountSetting')
// 账户密码修改
const accountPassword = () => import('../views/home/accountPassword')


// 概况
const Index = () => import('../views/index')



const About = () => import('../views/general/about')


const router = new Router({
    mode: 'history',
    base: base,
    routes: [
        { path: '/', name: '首页',  meta: { needLogin: false }, component: Home, show: false },
        { path: '/login', name: '登陆', meta: { needLogin: false }, component: Login, show: false },
        { path: '/register', name: '注册',  meta: { needLogin: false }, component: Register, show: false  },
        { path: '/account_home', name: '账户中心', meta: { needLogin: true }, component: accountHome, show: false  },
        { path: '/account_setting', name: '账号设置', meta: { needLogin: true }, component: accountSetting, show: false  },
        { path: '/account_password', name: '修改密码', meta: { needLogin: true }, component: accountPassword, show: false  },
        {   
            path: '/index',
            name: '概况总览',
            component: Index,
            show: true,
            children: [
                { path: '/', name: '概况总览', meta: { needLogin: true },  component: About, show: false },
            ]
        },
        {
            path: '/setting',
            name: '创意管理',
            component: Index,
            show: true,
            needLogin: true,
            children: [
                { path: '/setting', name: '注册1', meta: { needLogin: true }, component: About, show: true },
                { path: '/sad', name: '注册2', meta: { needLogin: true }, component: About, show: true },
                { path: '/sczxad', name: '注册3', meta: { needLogin: true }, component: About, show: true },
                { path: '/ccccxzcc4', name: '注册4', meta: { needLogin: true }, component: About, show: true },
            ]
        },
        {
            path: '/xzcczxczx',
            name: '活动管理',
            component: Index,
            show: true,
            needLogin: true,
            children: [
                { path: '/xzcczxczx', name: '注册1', meta: { needLogin: true }, component: About, show: true },
                { path: '/cccczxczxc21c2', name: '注册2', meta: { needLogin: true }, component: About, show: true },
                { path: '/scscxz', name: '注册3', meta: { needLogin: true }, component: About, show: true },
                { path: '/xzczxcz', name: '注册4', meta: { needLogin: true }, component: About, show: true },
            ]
        },
        {
            path: '/123sdad',
            name: '店铺管理',
            component: Index,
            show: true,
            needLogin: true,
            children: [
                { path: '/123sdad', name: '注册1', meta: { needLogin: true }, component: About, show: true },
                { path: '/ccccc655462', name: '注册2', meta: { needLogin: true }, component: About, show: true },
                { path: '/ccczxc8', name: '注册3', meta: { needLogin: true }, component: About, show: false },
                { path: '/zxczxczxmn', name: '注册4', meta: { needLogin: true }, component: About, show: false },
            ]
        },
        {
            path: '/dsad12123213',
            name: '用户管理',
            component: Index,
            show: true,
            needLogin: true,
            children: [
                { path: '/dsad12123213', name: '中国', meta: { needLogin: true }, component: About, show: true },
                { path: '/dsad121232131', name: '中国', meta: { needLogin: true }, component: About, show: true },
                { path: '/dsad1212321323', name: '注册3', meta: { needLogin: true }, component: About, show: false },
                { path: '/dsad1212321332432', name: '注册4', meta: { needLogin: true }, component: About, show: false },
            ]
        },
        {
            path: '/ds1sadsa',
            name: '数据中心',
            component: Index,
            show: true,
            needLogin: true,
            children: [
                { path: '/ds1sadsa', name: '注册1', meta: { needLogin: true }, component: About, show: true },
            ]
        },
        {
            path: '/ds1sadsacxz',
            name: '功能插件',
            component: Index,
            show: true,
            needLogin: true,
            children: [
                { path: '/ds1sadsacxz', name: '注册1', meta: { needLogin: true }, component: About, show: true },
            ]
        },
        {
            path: '/ds1sadsacxz2321',
            name: '服务中心',
            component: Index,
            show: true,
            needLogin: true,
            children: [
                { path: '/ds1sadsacxz2321', name: '注册1', meta: { needLogin: true }, component: About, show: true },
            ]
        },
        {
            path: '/ds1sadsacxz232121321312',
            name: '设置',
            component: Index,
            show: true,
            needLogin: true,
            children: [
                { path: '/ds1sadsacxz232121321312', name: '注册1', meta: { needLogin: true }, component: About, show: true },
            ]
        },
        {
            path: '*',
            redirect: '/index',
            show: false
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
});

router.beforeEach((to, from, next) => {
    const isLogin = window.sessionStorage.getItem('token')
    if (to.meta.needLogin) {  // 判断该路由是否需要登录权限
        if (isLogin) { // 判断是否已经登录
            next()
        }
        else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next()
    }
});

export default router;
