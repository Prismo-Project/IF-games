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
  const valor = item.valor ? parseFloat(item.valor.replace(',', '.')) : 0; 
  const itemComValor = {
    ...item,
    valor: valor 
  };
  carrinho.value.push(itemComValor);
  console.log('Item adicionado ao carrinho (main):', carrinho.value);
}

</script>

<template>
    <header>
    <h3><a href="#">IFbooks</a></h3>
    <p>apreço a <br> leitura</p>
    <input type="text" id="searchInput" placeholder="Pesquisar">
    <button onclick="pesquisar()"><img src="../src/Images/icons/procurar.png" alt=""></button>
    <ul>
      <li><a href="#">Termos</a></li>
      <li><a href="#">Equipe</a></li>
      <li><a href="#">Envio</a></li>
      <span><li><a href="#">Devoluções</a></li></span>
    </ul>
    <span><a href="#"><img src="../src/Images/icons/carrinho-de-compras.png" alt=""></a></span>
    <span><a href="#"><img src="../src/Images/icons/coracao.png" alt=""></a></span>
    <a href="#"><img src="../src/Images/icons/do-utilizador.png" alt=""></a>
  </header>


  <div id="banner">
    <div id="text">
    <span><p>Autor de Abril</p></span>
    <h1>Eric-Emanuel Schmitt</h1>
    <p>Eric-Emmanuel Schmitt has been awarded more than 20<br>literary prizes and distinctions, and in 2001 he received the<br>title of Chevalier des Arts et des Lettres. His books have been<br>translated into over 40 languages.</p>
    <button>Acessar página do livro</button>
  </div>
  <div id="image">
    <img src="../src/Images/book.png" alt="">
  </div>
   </div>
   <div id="faixinha">
   <ul>
    <li><img src="../src/Images/icons/lado-do-caminhao.png" alt=""><a href="#"><h3>Frete grátis para SC</h3></a></li>
    <li class="prioridade"><img src="../src/Images/icons/estrela.png" alt=""><a href="#"><h3>Livros recomendados</h3></a></li>
    <li class="prioridade"><img src="../src/Images/icons/livro-aberto-capa.png" alt=""><a href="#"><h3>Mais vendidos</h3></a></li>
   </ul>
  </div>
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
          <button class="comprar" @click="adicionarAoCarrinho(item)">Comprar</button>
        </div>
      </article>
    </div>
  </div>

</template>

<style scoped>
  template{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
  a{
    text-decoration: none;
    color: #7B7881;
  }
  header h3 a{
    color: #231F2D;
  }
  header{
    display: flex;
    border-bottom: #27AE60 2px solid;
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
  div#banner {
    display: flex;
    padding: 0 200px 10px 300px;
    border-bottom: #27AE60 2px solid;
  }
  div#banner div#text {
    padding-top: 150px;
  }
  div#banner div#text span p{
    color: #27AE60;
    border: #27AE60 1px solid;
    border-radius: 5%;
    padding: 10px;
    margin: 0 350px 0 0;
  }
  div#banner div#text p{
    color:#4D4C4C ;
    padding-bottom: 40px;
  }
  div#banner div#text h1{
    padding: 15px 0 20px 0;
    font-size: 3rem;
    font-weight: 500;
    color: #382C2C;
  }
  
  div#banner div#text button{
    color: white;
    font-size: 20px;
    padding: 20px;
    background-color: #27AE60;
    border: none;
    border-radius: 3%;
  }
  div#banner div#image img{
    margin: 20px 0 0 350px;
  }
  div#faixinha ul{
    display: flex;
    border-bottom: #27AE60 2px solid;
    padding: 75px 0 75px 250px;
  }
  div#faixinha ul li{
    display: flex;
  }
  div#faixinha ul li img{
    width: 40px;
  }
  div#faixinha ul li.prioridade{
    border-left: #7B7881 2px solid; 
    margin-left: 100px;
    padding-left: 100px;
  }
  div#faixinha h3{
    font-size: 1.5rem;
    font-weight: 500;
    color: #382C2C;
    padding-left: 30px;
  }
</style>
