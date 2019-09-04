import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let base = `${process.env.BASE_URL}` // 动态获取二级目录


// 首页
const Login = () => import('../views/home/login')
const Register = () => import('../views/home/register')
const Home = () => import('../views/home/index')

// 登陆首页
const Index = () => import('../views/index')

// 概况
const About = () => import('../views/general/about')


const router = new Router({
    mode: 'history',
    base: base,
    routes: [
        { path: '/', name: '首页', component: Home, show: false },
        { path: '/login', name: '登陆', component: Login, show: false },
        { path: '/register', name: '注册', component: Register, show: false  },
        {
            path: '/index',
            name: '概况总览',
            component: Index,
            show: true,
            children: [
                { path: '/index', name: '概况总览', component: About, show: false },
            ]
        },
        {
            path: '/setting',
            name: '创意管理',
            component: Index,
            show: true,
            children: [
                { path: '/setting', name: '注册1', component: About, show: true },
                { path: '/sad', name: '注册2', component: About, show: true },
                { path: '/sczxad', name: '注册3', component: About, show: true },
                { path: '/ccccxzcc4', name: '注册4', component: About, show: true },
            ]
        },
        {
            path: '/xzcczxczx',
            name: '活动管理',
            component: Index,
            show: true,
            children: [
                { path: '/xzcczxczx', name: '注册1', component: About, show: true },
                { path: '/cccczxczxc21c2', name: '注册2', component: About, show: true },
                { path: '/scscxz', name: '注册3', component: About, show: true },
                { path: '/xzczxcz', name: '注册4', component: About, show: true },
            ]
        },
        {
            path: '/123sdad',
            name: '店铺管理',
            component: Index,
            show: true,
            children: [
                { path: '/123sdad', name: '注册1', component: About, show: true },
                { path: '/ccccc655462', name: '注册2', component: About, show: true },
                { path: '/ccczxc8', name: '注册3', component: About, show: false },
                { path: '/zxczxczxmn', name: '注册4', component: About, show: false },
            ]
        },
        {
            path: '/dsad12123213',
            name: '用户管理',
            component: Index,
            show: true,
            children: [
                { path: '/dsad12123213', name: '中国', component: About, show: true },
                { path: '/dsad121232131', name: '中国', component: About, show: true },
                { path: '/dsad1212321323', name: '注册3', component: About, show: false },
                { path: '/dsad1212321332432', name: '注册4', component: About, show: false },
            ]
        },
        {
            path: '/ds1sadsa',
            name: '数据中心',
            component: Index,
            show: true,
            children: [
                { path: '/ds1sadsa', name: '注册1', component: About, show: true },
            ]
        },
        {
            path: '/ds1sadsacxz',
            name: '功能插件',
            component: Index,
            show: true,
            children: [
                { path: '/ds1sadsacxz', name: '注册1', component: About, show: true },
            ]
        },
        {
            path: '/ds1sadsacxz2321',
            name: '服务中心',
            component: Index,
            show: true,
            children: [
                { path: '/ds1sadsacxz2321', name: '注册1', component: About, show: true },
            ]
        },
        {
            path: '/ds1sadsacxz232121321312',
            name: '设置',
            component: Index,
            show: true,
            children: [
                { path: '/ds1sadsacxz232121321312', name: '注册1', component: About, show: true },
            ]
        },
        {
            path: '*',
            redirect: '/',
            show: false,
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
    // 做些什么，通常权限控制就在这里做哦

    // 必须写next()哦，不然你的页面就会白白的，而且不报错，俗称"代码下毒"
    next();
});

export default router;
