import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Oficinas from '../views/Oficinas.vue';
import Contacto from '../views/Contacto.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/oficinas',
        name: 'Oficinas',
        component: Oficinas,
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: Contacto,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;