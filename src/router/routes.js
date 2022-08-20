export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue')
    },
    {
        path: '/pokemon/:name',
        name: 'pokemon',
        component: () => import('../views/PokemonView.vue')
    },
    {
        path:'/favorites',
        name: 'favorites',
        component: () => import('../views/FavoritesView.vue')
    },
    // will match everything and put it under `$route.params.pathMatch`
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: () => import('../views/NotFoundView.vue') 
    },
];