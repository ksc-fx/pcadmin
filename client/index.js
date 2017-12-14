import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import NProgress from 'vue-nprogress';
import CommonComp from './components/common/index';

Vue.use(NProgress, {});
const nprogress = new NProgress({ parent: '.app-nprogress' });

// 全局组件
// 全局组件
Object.keys(CommonComp).forEach(v => {
    Vue.component(v, CommonComp[v]);
});

const app = new Vue({
    router,
    store,
    nprogress,
    ...App
});

app.$mount('#App');

/**
__RESOURCE_MAP__;
**/
