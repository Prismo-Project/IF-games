<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import carrinhoCompras from '@/components/CarrinhoCompras.vue';

/* Containers */

const autor1 = "Cassandra Clare"
const valorPadrao = "23.42"

const items = ref([
  {
    id: 1,
    livro: 'src/Images/ChainOfIron.png',
    titulo: "Chain Of Iron",
    autor: autor1,
    valor: valorPadrao
  },
  {
    id: 2,
    livro: 'src/Images/ChainOfThorns.png',
    titulo: "Chain Of Thorns",
    autor: autor1,
    valor: valorPadrao
  },
  {
    id: 3,
    livro: 'src/Images/CityOfFallenAngels.png',
    titulo: "City Of Fallen Angels",
    autor: autor1,
    valor: "13.94"
  },
  {
    id: 4,
    livro: 'src/Images/NonaTheNinth.png',
    titulo: "Nona the Ninth",
    autor: autor1,
    valor: "16.84"
  },
  {
    id: 5,
    livro: 'src/Images/HarlemShuffle.png',
    titulo: "Harlem Shuffle  ",
    autor: "Colson Whitehead",
    valor: "26.92"
  },
  {
    id: 6,
    livro: 'src/Images/TwoOldWomem.png',
    titulo: "Two Old Women",
    autor: "Velma Walls",
    valor: "13.95"
  },
  {
    id: 7,
    livro: 'src/Images/CarrieSotoIsBack.png',
    titulo: "Carrie Soto Is Back",
    autor: "Taylor Jenkirs Reid",
    valor: "26.04"
  },
  {
    id: 8,
    livro: 'src/Images/BookLovers.png',
    titulo: "Book Lovers",
    autor: "Emily Henry",
    valor: "15.81"
  }
])

/* FIM DOS CONTAINERS */  
const router = useRouter();

const redirecionarParaOutraPagina = () => {
  router.push({
    path: '/carrinho',
    query: { carrinho: JSON.stringify(carrinho.value) }
  });
};

const carrinho = ref([]);

function adicionarAoCarrinho(item) {
  const valor = item.valor ? parseFloat(item.valor.replace(',', '.')) : 0; // Verifica se valor existe antes de tentar formatar
  const itemComValor = {
    ...item,
    valor: valor // Converte para número
  };
  carrinho.value.push(itemComValor);
  console.log('Item adicionado ao carrinho (main):', carrinho.value);
}

</script>

<template>
  <button @click="redirecionarParaOutraPagina">carrinho</button>
  <h1>Lançamentos</h1>
  <div class="wrapper">
    <div class="grid-container">
      <article v-for="item in items" :key="item.id" class="card">
        <div class="img">
          <img :src="item.livro" alt="Livro" class="livros" width="150">
        </div>
        <h2>{{ item.titulo }}</h2>
        <div class="text">
          <p class="autor">{{ item.autor }}</p>
          <h3>R${{ item.valor }}</h3>
          <button class="comprar" @click="adicionarAoCarrinho(item.id)">Comprar</button>
        </div>
      </article>
    </div>
  </div>

</template>

<style scoped>

</style>