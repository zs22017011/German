import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Oficinas from '../views/Oficinas.vue';
import Contacto from '../views/Contacto.vue';

import NuestraEmpresa from '../views/NuestraEmpresa.vue';
import ServiciosIngenieria from '../views/ServiciosIngenieria.vue';

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

    { path: '/nuestra-empresa',
        name: 'Nuestra Empresa',
        component: NuestraEmpresa
    },

    { path: '/servicios-ingenieria',
        name: 'Servicios Ingenieria',
        component: ServiciosIngenieria
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;