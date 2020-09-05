import axios from '../node_modules/axios';
import secret from './secret';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.secret = secret;

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
