/**
 * 菜单和路由配置
 */

export const state = {
    items: [
        {
            name: 'UI',
            path: '/ui',
            meta: {},
            component: (resolve, reject)=> {
                require.async('../../views/ui/index.vue', resolve);
            }
        }
    ]
}

export default {
    state
}
