import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../components/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../components/Home.vue'),
	},
	{
		path: '/search',
		name: 'Ghibli-Api',
		component: () => import('../components/Ghibli-Search.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
