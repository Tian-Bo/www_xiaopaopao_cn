export default navbarRouter = [
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
]