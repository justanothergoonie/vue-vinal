import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/Ghibli-Api',
		name: 'Ghibli-Api',
		component: () => import('../views/Ghibli-API.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
