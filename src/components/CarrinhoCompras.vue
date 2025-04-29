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
  
  <header>
    <h1>Carrinho</h1>
    <div>
    <h2>Título</h2>
    <h2>Quantidade</h2>
    <h2>Subtotal</h2>
  </div>
  </header>
  <div v-if="carrinho && carrinho.length > 0" class="compras">
   <article>
    <ul>
      <li v-for="item in carrinho" :key="item.id">
        <div>
          <img :src="item.livro" alt="Capa do livro" width="70" />
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
  padding: 10px 10px 5px 20px;
  border-bottom: #dedede 2px solid;
}

.text {
  padding-left: 25px;
}
header div{
  display: flex;
  border-bottom: #27AE60 2px solid;
}
header h1{
  color: #27AE60;
}
</style>