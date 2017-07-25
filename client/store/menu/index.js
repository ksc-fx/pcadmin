/**
 * 菜单和路由配置
 */

export const state = {
    items: [
        {
            name: 'UI',
            path: '/ui',
            meta: {
                icon: 'fa-bar-chart-o',
                expanded: true,
            },
            component: (resolve, reject)=> {
                require.async('../../views/ui/index.vue', resolve);
            },
            children: [
                {
                    name: 'button',
                    path: 'chartist',
                    component: (resolve, reject)=> {
                        require.async('../../views/ui/button/', resolve);
                    },
                    meta: {
                    }
                }
            ]
        },
        {
            name: 'AAAA',
            meta: {
                icon: 'fa-building-o',
                expanded: true,
            },
            children: [
                {
                    name: 'button1',
                    path: '/chartist1',
                    component: (resolve, reject)=> {
                        require.async('../../views/ui/button/', resolve);
                    },
                    meta: {
                    }
                }
            ]
        }
    ]
}

export default {
    state
}
