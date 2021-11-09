import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './src/components/home/Home.vue';
import Galeria from './src/components/galeria/Galeria.vue';
Vue.use(VueRouter)

const routes         = [
    { path: '/', name: 'home', component: Home },
    { path: '/galeria', name: 'galeria', component: Galeria }
]

const router = new VueRouter({
    mode: 'history',
    base: 'http://localhost:8080',
    routes
})

export default router