import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import menus from './menu'

Vue.use(Vuex);
Vue.use(VueResource);


const state = {
    // 布局设置
    layout: {
        showNavbar: true,
        showSidebar: true
    }
};

const actions = {};

const getters = {
    layout: (state) => state.layout
};

const mutations = {};

const modules = {
    menus
};


const store = new Vuex.Store({
    strict: true,
    actions,
    getters,
    modules,
    state,
    mutations,
});

export default store
