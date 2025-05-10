import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CarrinhoCompras from '@/components/CarrinhoCompras.vue'
import Game from '@/views/Game.vue' 

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/carrinho', name: 'Carrinho', component: CarrinhoCompras },
  { path: '/game/:id', name: 'Game', component: Game, props: true } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
  
  
})



export default router