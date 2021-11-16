import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/Home.vue';
import Galeria from '@/views/galeria/Galeria.vue';
import Teste from '@/components/Teste.vue';
Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/galeria', name: 'galeria', component: Galeria },
    { path: '/teste', name:'teste', component: Teste}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router