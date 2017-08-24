/**
 * 菜单和路由配置
 */

export const state = {
    items: [
        {
            name: 'UI',
            meta: {
                icon: 'fa-bar-chart-o',
                expanded: true
            },
            children: [
                {
                    name: '按钮',
                    path: '/ui/buttons',
                    component: () => import('../../views/ui/button/index.vue'),
                    meta: {
                    }
                }
            ]
        }
    ]
};

export default {
    state
};
