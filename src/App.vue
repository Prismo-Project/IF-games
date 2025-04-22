<script setup>
import { ref } from "vue";

const catalago = ref('')
const filmes = ref([
  
])
</script>

<template>
  <div class="cabeçario">
    <h3>IFbooks</h3>
    <p>apreço e leitura</p>
    <input type="text" id="searchInput" placeholder="Pesquisar">
    <button onclick="pesquisar()">Pesquisar</button>
    <ul>
      <li>Termos</li>
      <li>Equipe</li>
      <li>Envio</li>
      <li>Devoluções</li>
    </ul>
      
  </div>
  <div>
    <p>Autor de Abril</p>
    <h1>Eric-Emanuel Schmitt</h1>
    <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
    <button>Acessar página do livro</button>
  </div>
  <h1>Hello World</h1>
  <article v-for="catalago in filmes" :key="catalag.id">
      <h3>{{  }}</h3>
      <p>{{  }}</p>
    </article>
   
</template>

<style scoped>

</style>