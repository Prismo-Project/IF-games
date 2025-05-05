<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

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

// router
const router = useRouter();

const redirecionarParaOutraPagina = () => {
  router.push({
    path: '/carrinho',
    query: { carrinho: JSON.stringify(carrinho.value) }
  });
};

const irParaHome = () => {
  router.push('/');
};

//fim do router

const carrinho = ref([]);

function adicionarAoCarrinho(item) {
  const valor = item.valor ? parseFloat(item.valor.replace(',', '.')) : 0; 
  const itemComValor = {
    ...item,
    valor: valor 
  };
  carrinho.value.push(itemComValor);
  mostrarAlerta(item.titulo);
}

// aviso de compra no carrinho

const mensagemCarrinho = ref('');
const mostrarMensagem = ref(false);

function mostrarAlerta(tituloLivro) {
  mensagemCarrinho.value = `📚 "${tituloLivro}" adicionado ao carrinho!`;
  mostrarMensagem.value = true;
  setTimeout(() => {
    mostrarMensagem.value = false;
  }, 2500);
}

// aviso de compra no carrinho acima
</script>

<template>
  <header>
    <h3><a href="#" @click.prevent="irParaHome">IFgames</a></h3>
    <p>apreço a <br> cultura</p>
    <input type="text" id="searchInput" placeholder="Pesquisar">
    <button onclick="pesquisar()"><img src="../Images/icons/procurar.png" alt=""></button>
    <ul>
      <li><a href="#">Termos</a></li>
      <li><a href="#">Equipe</a></li>
      <li><a href="#">Envio</a></li>
      <span>
        <li><a href="#">Devoluções</a></li>
      </span>
    </ul>
    <span class="carrinho-icon">
      <a @click="redirecionarParaOutraPagina" href="#">
        <img src="../Images/icons/carrinho-de-compras.png" alt="">
        <span v-if="carrinho.length > 0" class="contador">{{ carrinho.length }}</span>
      </a>
    </span>
    <span><a href="#"><img src="../Images/icons/coracao.png" alt=""></a></span>
    <a href="#"><img src="../Images/icons/do-utilizador.png" alt=""></a>
  </header>

  <div id="banner">
    <div id="text">
      <span>
        <p>Jogo de Maio</p>
      </span>
      <h1>Elden Ring</h1>
      <p>the latest fantasy action-RPG <br>from Hidetaka Miyazaki(Bloodborne, Dark Souls) <br>& George R. R. Martin (Game of Thrones).
</p>
      <button>Acessar página do jogo</button>
    </div>
    <div id="image">
      <img src="/home/arthur.benk/Documentos/amostradoif/IFbooks/src/Images/elden-ring-capa.png" alt="">
    </div>
  </div>
  <div id="faixinha">
    <ul>
      <li><img src="../Images/icons/lado-do-caminhao.png" alt=""><a href="#">
          <h3>Frete grátis para SC</h3>
        </a></li>
      <li class="prioridade"><img src="../Images/icons/estrela.png" alt=""><a href="#">
          <h3>Jogos recomendados</h3>
        </a></li>
      <li class="prioridade"><img src="../Images/icons/controle-de-video-game.png" alt=""><a href="#">
          <h3>Mais vendidos</h3>
        </a></li>
    </ul>
  </div>
  <h1 class="lancamentos">Lançamentos</h1>
  <div v-if="mostrarMensagem" class="mensagem-carrinho">
    {{ mensagemCarrinho }}
  </div>
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

  <footer>
    <div class="divisao1">
      <p class="principal">IFgames</p>
      <a href="#"><img src="../Images/icons/facebook.png" alt="facebook"></a>
      <a href="#"><img src="../Images/icons/instagram.png" alt="instagram"></a>
      <a href="#"><img src="../Images/icons/twitter.png" alt="twitter"></a>
    </div>
    <div class="divisao2">
      <p class="principal">Contato</p>
      <ul>
        <li><img src="../Images/icons/Phone.png" alt="Telefone">
          <p>+55 47 40045263</p>
        </li>
        <li><img src="../Images/icons/Clock.png" alt="Relógio">
          <p>8h às 23h - Seg a Sex</p>
        </li>
        <li><img src="../Images/icons/Mail.png" alt="Email">
          <p>contato@ifgames.com</p>
        </li>
      </ul>

      <div class="cartoes">
        <img src="../Images/paipalCard-Logo.png" alt="PayPal">
        <img src="../Images/MasterCard-Logo.png" alt="MasterCard">
        <img src="../Images/VISA-card-logo.png" alt="Visa">
      </div>
      <p class="transp">&copy; Alguns direitos reservados. IFbooks 2025.</p>
    </div>
  </footer>
</template>

<style scoped>
template {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

div#banner {
  display: flex;
  padding: 0 200px 10px 300px;
  border-bottom: #27AE60 2px solid;
}
div#banner h1{
  margin: 0 0 0 -225px;
}

div#banner div#text {
  padding-top: 150px;
}

div#banner div#text span p {
  color: #27AE60;
  border: #27AE60 1px solid;
  border-radius: 5%;
  padding: 10px;
  margin: 0 350px 0 0;
}

div#banner div#text p {
  color: #4D4C4C;
  padding-bottom: 40px;
}

div#banner div#text h1 {
  padding: 15px 0 20px 0;
  font-size: 3rem;
  font-weight: 500;
  color: #382C2C;
}

div#banner div#text button {
  color: white;
  font-size: 20px;
  padding: 20px;
  background-color: #27AE60;
  border: none;
  border-radius: 3%;
}

div#banner div#image img {
  width: 500px;
  margin: 40px 0 20px 350px;
}

div#faixinha ul {
  display: flex;
  border-bottom: #27AE60 2px solid;
  padding: 75px 0 75px 250px;
}

div#faixinha ul li {
  display: flex;
}

div#faixinha ul li img {
  width: 40px;
}

div#faixinha ul li.prioridade {
  border-left: #7B7881 2px solid;
  margin-left: 100px;
  padding-left: 100px;
}

div#faixinha h3 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #382C2C;
  padding-left: 30px;
}

/* contador carrinho */
.carrinho-icon {
  position: relative;
}

.contador {
  position: absolute;
  top: 10px;
  right: 4px;
  background: #1d8548;
  color: white;
  border-radius: 100%;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
}
/* contador carrinho */

/* aviso de compra carrinho */
.mensagem-carrinho {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #27AE60;
  color: white;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  font-size: 16px;
  font-weight: bold;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}
/* aviso de compra carrinho */

/* efeito comprar */


button.comprar:active {
  transform: scale(0.95) translateY(2px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}
/* efeito comprar */
</style>
