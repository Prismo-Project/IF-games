<script setup>
import { carrinho } from 'src/App.vue';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Carrinho na página de checkout (store):', carrinho.value);
});
</script>

<template>
  <h1>Seu Carrinho</h1>
  <div v-if="carrinho.length > 0">
    <ul>
      <li v-for="item in carrinho" :key="item.id">
        {{ item.titulo }} - R${{ item.valor }}
      </li>
    </ul>
    <p>Total de itens: {{ carrinho.value.length }}</p>
    </div>
  <div v-else>
    <p>Seu carrinho está vazio.</p>
  </div>
</template>