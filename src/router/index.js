// IMPORTS
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

// ROUTES
const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	}
];

// SETUP ROUTER
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

// EXPORTS
export default router;
