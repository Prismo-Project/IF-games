import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CarrinhoCompras from '@/components/CarrinhoCompras.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/carrinho', name: 'Carrinho', component: CarrinhoCompras }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

