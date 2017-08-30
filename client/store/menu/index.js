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
                },
                {
                    name: '提示框',
                    path: '/ui/dialog',
                    component: () => import('../../views/ui/dialog/index.vue'),
                    meta: {
                    }
                },
                {
                    name: '下拉框',
                    path: '/ui/select',
                    component: () => import('../../views/ui/select/index.vue'),
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
