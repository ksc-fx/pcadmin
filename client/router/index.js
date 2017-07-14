import Vue from 'vue'
import Router from 'vue-router'
import {state} from '../store/menu'

Vue.use(Router)


//2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
    for (let i = 0, l = menu.length; i < l; i++) {
        let item = menu[i]
        if (item.path) {
            routes.push(item)
        }
        if (!item.component) {
            generateRoutesFromMenu(item.children, routes)
        }
    }
    return routes
}

export default new Router({
    mode: 'hash',
    linkActiveClass: 'is-active',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            name: 'Home',
            path: '*',
            meta: {},
            component: (resolve, reject)=> {
                require.async('../views/home/index.vue', resolve);
            }
        },
        ...generateRoutesFromMenu(state.items)
    ]
})


