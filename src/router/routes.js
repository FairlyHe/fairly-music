import layout from '@/layout/index.vue'

const routes = [
    {
        path: "/",
        redirect: { name: 'index' },
        name: "Home",
        component: layout,
        children: [
            {
                path: 'index',
                name: 'index',
                meta: {
                    title: '首页',
                    auth: true
                },
                component: () => import('@/views/home/index.vue')
            },
        ]
    }
]

export default routes
