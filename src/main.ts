import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    render: h => h(App),
}).$mount('#app');
