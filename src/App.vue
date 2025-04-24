<script setup>
import { ref } from "vue";

const catalago = ref('')
const filmes = ref([
  
])
</script>

<template>
  <header>
    <h3>IFbooks</h3>
    <p>apreço a <br> leitura</p>
    <input type="text" id="searchInput" placeholder="Pesquisar">
    <button onclick="pesquisar()"><img src="../src/Images/icons/procurar.png" alt=""></button>
    <ul>
      <li>Termos</li>
      <li>Equipe</li>
      <li>Envio</li>
      <span><li>Devoluções</li></span>
    </ul>
    <span><a href="#"><img src="../src/Images/icons/carrinho-de-compras.png" alt=""></a></span>
    <span><a href="#"><img src="../src/Images/icons/coracao.png" alt=""></a></span>
    <a href="#"><img src="../src/Images/icons/do-utilizador.png" alt=""></a>
      
  </header>
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
  template{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
  header{
    display: flex;
    border-bottom: #27AE60 1.5px solid;
  }
  header h3{
    padding: 5px 0 5px 250px;
    margin: 20px 10px 0 15px; 
  }
  header p{
    color: #27AE60;
    margin: 20px 75px 23px 0;
    padding-left: 10px;
    font-weight: 300;
    line-height: 20px;
    border-left: #27AE60 2px solid;  
  }
  header ul{
    display: flex;
  }
  header input{
    background-color: #F1F1F1;
    border: none;
    outline: none;
    margin-top: 23px;
    padding: 3px 3px 3px 18px;
    height: 2vw;
    width: 20vw;
    font-size: 1rem;
    
  }
  header button{
    border: none;
    background-color: #F1F1F1;  
    height: 2vw;
    margin-top: 23px;
    padding: 0 15px 0 15px
  }
  header button img{
    width: 20px;
    opacity: 50%;
  }
  header ul li{
    padding: 30px;
    list-style: none;
    color: #7B7881;
  }
  header ul span li {
    padding-right: 60px;
  }
  header a img{
    width: 63px;
    margin-top: 30px;
    padding-right: 20px;
    padding-left: 20px;
  }
  header span img{
    border-right: #27AE60 1px solid;
  }
</style>