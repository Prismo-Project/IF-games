<script setup>
import { ref } from "vue";

const catalago = ref('')
const filmes = ref([
  
])
</script>

<template>
   <header>
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
    </header>
  <div>
    <p>Autor de Abril</p>
    <h1>Eric-Emanuel Schmitt</h1>
    <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
    <button>Acessar página do livro</button>
    <p>Frete grátis para SC</p>
    <p>Livros recomendados</p>
    <p>Mais vendidos</p>
  </div>
  <div class="main">
    <h3>Lançamento</h3>
  </div>
  <div class="footer">
    <footer>
      <div class="dvisao1">
      <p>IFbooks</p>
      <img src="../src/Images/raphael_facebook.png" alt="facebook">
      <img src="../src/Images/Vector(1).png" alt="instagram">
      <img src="../src/Images/fa6-brands_square-twitter.png" alt="twitter">
     </div>
     <div class="divisao2">
      <p>Contato</p>
      <img src="../src/Images/Icon.png" alt="Telefone">
      <p>+55 47 40045263</p>
      <img src="../src/Images/Clock.png" alt="Relógio">
      <p>8h às 23h - Seg a Sex</p>
      <img src="../src/Images/Mail.png" alt="Email">
      <p>contato@ifbooks.com</p>
      <img src="../src/Images/paipalCard-Logo.png" alt="PayPal">
      <img src="../src/Images/MasterCard-Logo.png" alt="MasterCard">
      <img src="../src/Images/VISA-card-logo.png" alt="Visa">
      <p>&copy; Alguns direitos reservados. IFbooks 2025.</p>
    </div>
    </footer>
  </div>
  <article v-for="catalago in filmes" :key="catalag.id">
      <h3>{{  }}</h3>
      <p>{{  }}</p>
    </article>
</template>

<style scoped>
.footer {
  background-color: #27AE60; 
  color: #fff;              
  padding: 20px 0;         
  display: flex;
}

</style>
