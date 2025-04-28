<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();

const carrinho = ref([]);

onMounted(() => {
  
  if (route.query.carrinho) {
    try {
      // Caso a query 'carrinho' exista, tenta parsear
      carrinho.value = JSON.parse(route.query.carrinho);
    } catch (e) {
      console.error("Erro ao parsear o carrinho da query string", e);
    }
  }
  console.log('Carrinho na página de checkout:', carrinho.value);
});
</script>

<template>
  <h1>Seu Carrinho</h1>
  
  <div v-if="carrinho && carrinho.length > 0">
    <ul>
      <li v-for="item in carrinho" :key="item.id">
        {{ item.titulo }} - R${{ item.valor }}
      </li>
    </ul>
    <p>Total de itens: {{ carrinho.length }}</p>
  </div>
  
  <div v-else>
    <p>Seu carrinho está vazio.</p>
  </div>
</template>
