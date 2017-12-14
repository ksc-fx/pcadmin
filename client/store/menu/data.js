const data = [
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
                component: function() {
                    return import(/* webpackChunkName: "button" */ '../../views/ui/button/index.vue');
                },
                meta: {}
            },
            {
                name: '提示框',
                path: '/ui/dialog',
                component: function() {
                    return import(/* webpackChunkName: "dialog" */ '../../views/ui/dialog/index.vue');
                },
                meta: {}
            },
            {
                name: '下拉框',
                path: '/ui/select',
                component: function() {
                    return import(/* webpackChunkName: "select" */ '../../views/ui/select/index.vue');
                },
                meta: {}
            }
        ]
    }
];

module.exports = data;
