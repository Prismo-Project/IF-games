<script setup>
import { ref } from "vue";

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
  }
])
</script>

<template>
    <div class="grid-container">
      <article v-for="item in items" :key="item.id" class="card">
        <img :src=" item.livro " alt="Livro" class="livros" width="150">
      <div class="text">
        <h2>{{ item.titulo }}</h2>
      <p class="autor">{{ item.autor }}</p>
      <h3>R${{ item.valor }}</h3>
      <p class="comprar">Comprar</p>
      </div>
        
      
    </article>
    </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  padding: 20px;
}

/** .card.livros{
  align-items: center;
} */

.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  background-color: #fff;
}

.card h2 {
  color: black;
  text-align: left;
  font-size: 1rem;
}

.card h3 {
  color: black;
  font-size: 0.8rem;
}

.card p.autor {
  color: #4F4C57;
  font-size: 0.5rem;
}

.card:hover {
  transform: translateY(-5px);
}

.comprar {
  background-color: #28a745;
  color: white;
  padding: 8px 56px;
  cursor: pointer;
  margin-top: auto;
}

.comprar:hover {
  background-color: #218838;
}
</style>  
 