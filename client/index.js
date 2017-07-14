import  Vue from 'vue'
import  router from './router'
import  store from './store'
import  App from './App.vue'
import  NProgress from 'vue-nprogress'

Vue.use(NProgress, {

});
const nprogress = new NProgress({ parent: '.nprogress-container' });

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
