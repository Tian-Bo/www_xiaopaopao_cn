/*
 * @Author: tianbo
 * @LastEditors: tianbo
 * @Date: 2019-09-03 17:25:07
 * @LastEditTime: 2019-09-03 17:25:07
 */
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


// 创意中心-初级玩法
const primary = () => import('../views/creation/primary')
// 创意中心-中级玩法
const intermediate = () => import('../views/creation/intermediate')
// 创意中心-高级玩法
const senior = () => import('../views/creation/senior')


// 概况
const Index = () => import('../views/index')



const General = () => import('../views/general/index')


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
            path: '/general',
            name: '概况总览',
            component: Index,
            icon: 'icon-general',
            show: true,
            children: [
                { path: '/', name: '概况总览', meta: { needLogin: true },  component: General, show: false },
            ]
        },
        {
            path: '/creation',
            name: '创作中心',
            component: Index,
            icon: 'icon-global',
            show: true,
            needLogin: true,
            children: [
                { 
                    path: '/primary', 
                    name: '初级玩法', 
                    meta: { 
                        needLogin: true 
                    }, 
                    component: () => import('../views/creation/primary'), 
                    show: true 
                },
                { path: '/intermediate', name: '中级玩法', meta: { needLogin: true }, component: intermediate, show: true },
                { path: '/senior', name: '高级玩法', meta: { needLogin: true }, component: senior, show: true },
            ]
        },
        {
            path: '/management',
            name: '创意管理',
            component: Index,
            icon: 'icon-fenlei',
            show: true,
            needLogin: true,
            children: [
                { path: '/setting', name: '注册1', meta: { needLogin: true }, component: General, show: true },
                { path: '/sad', name: '注册2', meta: { needLogin: true }, component: General, show: true },
                { path: '/sczxad', name: '注册3', meta: { needLogin: true }, component: General, show: true },
                { path: '/ccccxzcc4', name: '注册4', meta: { needLogin: true }, component: General, show: true },
            ]
        },
        {
            path: '/user',
            name: '用户管理',
            component: Index,
            icon: 'icon-sogo',
            show: true,
            needLogin: true,
            children: [
                { path: '/ds1sadsacxz', name: '注册1', meta: { needLogin: true }, component: General, show: true },
            ]
        },
        {
            path: '/marketing',
            name: '营销中心',
            component: Index,
            icon: 'icon-caidan1',
            show: true,
            needLogin: true,
            children: [
                { path: '/ds1sadsacxz', name: '注册1', meta: { needLogin: true }, component: General, show: true },
            ]
        },
        {
            path: '/distribution',
            name: '分销中心',
            component: Index,
            icon: 'icon-icon_shezhi',
            show: true,
            needLogin: true,
            children: [
                { path: '/ds1sadsacxz232121321312', name: '注册1', meta: { needLogin: true }, component: General, show: true },
            ]
        },
        {
            path: '/shop',
            name: '店铺装修',
            component: Index,
            icon: 'icon-daohangshouye-copy',
            show: true,
            needLogin: true,
            children: [
                { path: '/ds1sadsacxz', name: '注册1', meta: { needLogin: true }, component: General, show: true },
            ]
        },
        {
            path: '/service',
            name: '服务中心',
            component: Index,
            icon: 'icon-jietouzuoyi',
            show: true,
            needLogin: true,
            children: [
                { path: '/setting', name: '注册1', meta: { needLogin: true }, component: General, show: true },
                { path: '/sad', name: '注册2', meta: { needLogin: true }, component: General, show: true },
                { path: '/sczxad', name: '注册3', meta: { needLogin: true }, component: General, show: true },
                { path: '/ccccxzcc4', name: '注册4', meta: { needLogin: true }, component: General, show: true },
            ]
        },
        {
            path: '/setting',
            name: '设置',
            component: Index,
            icon: 'icon-icon_shezhi',
            show: true,
            needLogin: true,
            children: [
                { path: '/ds1sadsacxz232121321312', name: '注册1', meta: { needLogin: true }, component: General, show: true },
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
