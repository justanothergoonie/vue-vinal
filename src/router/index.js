import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../components/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/Ghibli-Api',
		name: 'Ghibli-Api',
		component: () => import('../components/Ghibli-Search.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
