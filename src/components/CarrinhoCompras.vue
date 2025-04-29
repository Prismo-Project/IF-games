<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();

const carrinho = ref([]);

onMounted(() => {
  
  if (route.query.carrinho) {
    try {
      carrinho.value = JSON.parse(route.query.carrinho);
    } catch (e) {
      console.error("Erro ao parsear o carrinho da query string", e);
    }
  }
  console.log('Carrinho na página de checkout:', carrinho.value);
});

</script>

<template>
  <h1>Carrinho</h1>
  
  <div v-if="carrinho && carrinho.length > 0" class="compras">
   <article>
    <ul>
      <li v-for="item in carrinho" :key="item.id">
        <div>
          <img :src="item.livro" alt="Capa do livro" width="100" />
        </div>
        <div class="text">
          <h2>{{ item.titulo }}</h2>
          <p>{{ item.autor }} </p>
          <h3>R${{ item.valor.toFixed(2) }}</h3>
        </div>
      </li>
    </ul>
   </article>
    <p>Total de itens: {{ carrinho.length }}</p>
  </div>
  
  <div v-else>
    <p>Seu carrinho está vazio.</p>
  </div>
</template>

<style scoped>

article li {
  display: flex;
  padding: 0 10px 20px 20px;
}

.text {
  padding-left: 30px;
}

</style>