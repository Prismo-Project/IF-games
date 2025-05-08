<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from 'vue-router';

const jogos = ref([
  {
    id: 1,
    imagem: 'public/Images/Elden Ring.png',
    titulo: "Elden Ring",
    desenvolvedor: "FromSoftware",
    valor: 199.90,
    plataformas: ["PS5", "Xbox Series X", "PC"],
    lancamento: "2022"
  },
  {
    id: 2,
    imagem: 'public/Images/Cyberpunk 2077.png',
    titulo: "Cyberpunk 2077",
    desenvolvedor: "CD Project Red",
    valor: 199.90,
    plataformas: ["PS4", "Xbox Series X", "PC", "PS5"],
    lancamento: "2020"
  },
  {
    id: 3,
    imagem: 'public/Images/Dead Cells.png',
    titulo: "Dead Cells",
    desenvolvedor: "Playdigious",
    valor: 39.90,
    plataformas: ["Switch", "PS4", "PC", "Xbox Series One"],
    lancamento: "2022"
  },
  {
    id: 4,
    imagem: 'public/Images/Fallout 4.png',
    titulo: "Fallout 4",
    desenvolvedor: "Bethesda",
    valor: 89.90,
    plataformas: ["Xbox One", "PS4", "Switch" ,"PC"],
    lancamento: "2015"
  },
  {
    id: 5,
    imagem: 'public/Images/Life is Strange DE.png',
    titulo: "Life is Strange ",
    desenvolvedor: "Square Enix",
    valor: 299.90,
    plataformas: ["Xbox Series X", "PC", "Switch", "PS5"],
    lancamento: "2024"
  },
  {
    id: 6,
    imagem: 'public/Images/The elders scrolls V.png',
    titulo: "The Elder scrolls V",
    desenvolvedor: "Bethesda",
    valor: 89.90,
    plataformas: ["PS4", "Xbox Series X", "PC"],
    lancamento: "2023"
  },
  {
    id: 7,
    imagem: 'public/Images/The Last of Us.png',
    titulo: "The Last of Us",
    desenvolvedor: "Naughty Dog",
    valor: 349.90,
    plataformas: ["PS4", "PS5", "PC"],
    lancamento: "2024"
  },
  {
    id: 8,
    imagem: 'public/Images/Until Dawn.png',
    titulo: "Until Dawn",
    desenvolvedor: "Supermassive Games",
    valor: 224.90,
    plataformas: ["PS4","PS5", "PC"],
    lancamento: "2015"
  },
  {
    id: 9,
    imagem: 'public/Images/Sea of thieves.png',
    titulo: "Sea of Thieves",
    desenvolvedor: "Rare",
    valor: 89.90,
    plataformas: ["PS5", "Xbox Series X","Xbox Series S", "PC"],
    lancamento: "2018"
  },
  {
    id: 10,
    imagem: 'public/Images/Street fighter.png',
    titulo: "Street Fighter 6",
    desenvolvedor: "Capcom",
    valor: 169.90,
    plataformas: ["PS5", "Xbox Series X", "PC"],
    lancamento: "2023"
  },
  {
    id: 11,
    imagem: 'public/Images/Persona 3 Reload.png',
    titulo: "Persona 3 Reload",
    desenvolvedor: "Atlus",
    valor: 219.90,
    plataformas: ["PS5", "Xbox Series X", "PC"],
    lancamento: "2024"
  },
  {
    id: 12,
    imagem: 'public/Images/Metal Gear.png',
    titulo: "Metal Gear Solid A",
    desenvolvedor: "Konami",
    valor: 349.90,
    plataformas: ["PS5", "Xbox Series X", "PC"],
    lancamento: "2023"
  }
 
]);

// router
const router = useRouter();

const redirecionarParaCarrinho = () => {
  router.push('/carrinho');
};

const irParaHome = () => {
  router.push('/');
};

const carrinho = ref([]);

onMounted(() => {
  const carrinhoSalvo = sessionStorage.getItem('carrinho');
  if (carrinhoSalvo) {
    carrinho.value = JSON.parse(carrinhoSalvo);
  }
});

watch(carrinho, (novoCarrinho) => {
  sessionStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
}, { deep: true });

function adicionarAoCarrinho(jogo) {
  const valor = typeof jogo.valor === 'string' ? parseFloat(jogo.valor.replace(',', '.')) : jogo.valor;
  
  const itemExistente = carrinho.value.find(i => i.id === jogo.id);
  
  if (itemExistente) {
    itemExistente.quantidade = (itemExistente.quantidade || 1) + 1;
  } else {
    const itemComValor = {
      ...jogo,
      valor: valor,
      quantidade: 1
    };
    carrinho.value.push(itemComValor);
  }
  
  mostrarAlerta(jogo.titulo);
}

const mensagemCarrinho = ref('');
const mostrarMensagem = ref(false);

function mostrarAlerta(tituloJogo) {
  mensagemCarrinho.value = `🎮 "${tituloJogo}" adicionado ao carrinho!`;
  mostrarMensagem.value = true;
  setTimeout(() => {
    mostrarMensagem.value = false;
  }, 2500);
}
</script>

<template>
  <header>
    <h3><a href="#" @click.prevent="irParaHome">IFgames</a></h3>
    <p>apreço a <br> cultura</p>
    <input type="text" id="searchInput" placeholder="Pesquisar">
    <button onclick="pesquisar()"><img src="/public/Images/icons/procurar.png" alt=""></button>
    <ul>
      <li><a href="#">Termos</a></li>
      <li><a href="#">Equipe</a></li>
      <li><a href="#">Envio</a></li>
      <span>
        <li><a href="#">Devoluções</a></li>
      </span>
    </ul>
    <span class="carrinho-icon">
      <a @click="redirecionarParaCarrinho" href="#">
        <img src="/public/Images/icons/carrinho-de-compras.png" alt="">
        <span v-if="carrinho.length > 0" class="contador">
          {{ carrinho.reduce((total, item) => total + (item.quantidade || 1), 0) }}
        </span>
      </a>
    </span>
    <span><a href="#"><img src="/public/Images/icons/coracao.png" alt=""></a></span>
    <a href="#"><img src="/public/Images/icons/do-utilizador.png" alt=""></a>
  </header>

  <div id="banner">
    <div id="text">
      <span>
        <p>Jogo do mês</p>
      </span>
      <h1>Elden Ring</h1>
      <p>the latest fantasy action-RPG <br>from Hidetaka Miyazaki(Bloodborne, Dark Souls) <br>& George R. R. Martin (Game of Thrones).</p>
      <router-link to="/game/1">
        <button>Acessar página do jogo</button>
      </router-link>
    </div>
    <div id="image">
      <img src="/public/Images/elden-ring-capa.png" alt="Elden Ring">
    </div>
  </div>
  
  <div id="faixinha">
    <ul>
      <li><img src="/public/Images/icons/lado-do-caminhao.png" alt=""><a href="#">
          <h3>Frete grátis para SC</h3>
        </a></li>
      <li class="prioridade"><img src="/public/Images/icons/estrela.png" alt=""><a href="#">
          <h3>Jogos recomendados</h3>
        </a></li>
      <li class="prioridade"><img src="/public/Images/icons/controle-de-video-game.png" alt=""><a href="#">
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
      <article v-for="jogo in jogos" :key="jogo.id" class="card">
        <div class="img">
          <router-link :to="'/game/' + jogo.id">
            <img :src="jogo.imagem" :alt="jogo.titulo" class="game-image" width="150">
          </router-link>
        </div>
        <h2>
          <router-link :to="'/game/' + jogo.id">{{ jogo.titulo }}</router-link>
        </h2>
        <div class="text">
          <p class="desenvolvedor">{{ jogo.desenvolvedor }}</p>
          <h3>R$ {{ jogo.valor.toFixed(2) }}</h3>
          <button class="comprar" @click="adicionarAoCarrinho(jogo)">Comprar</button>
        </div>
      </article>
    </div>
  </div>

  <footer>
    <div class="divisao1">
      <p class="principal">IFgames</p>
      <a href="https://www.facebook.com/?locale=pt_BR"><img src="/public/Images/icons/facebook.png" alt="facebook"></a>
      <a href="https://www.instagram.com/"><img src="/public/Images/icons/instagram.png" alt="instagram"></a>
      <a href="https://x.com/?lang=pt"><img src="/public/Images/icons/twitter.png" alt="twitter"></a>
    </div>
    <div class="divisao2">
      <p class="principal">Contato</p>
      <ul>
        <li><img src="/public/Images/icons/Phone.png" alt="Telefone">
          <p>+55 47 40045263</p>
        </li>
        <li><img src="/public/Images/icons/Clock.png" alt="Relógio">
          <p>8h às 23h - Seg a Sex</p>
        </li>
        <li><img src="/public/Images/icons/Mail.png" alt="Email">
          <p>contato@ifgames.com</p>
        </li>
      </ul>

      <div class="cartoes">
        <img src="/public/Images/paipalCard-Logo.png" alt="PayPal">
        <img src="/public/Images/MasterCard-Logo.png" alt="MasterCard">
        <img src="/public/Images/VISA-card-logo.png" alt="Visa">
      </div>
      <p class="transp">&copy; Alguns direitos reservados. IFgames 2025.</p>
    </div>
  </footer>
</template>

<style scoped>
template {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Banner principal */
#banner {
  display: flex;
  padding: 0 200px 10px 300px;
  border-bottom: #27AE60 2px solid;
  align-items: center;
}

#banner #text {
  flex: 1;
  justify-items: left;
}

#banner #text span p {
  color: #27AE60;
  border: #27AE60 1px solid;
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
  margin-bottom: 20px;
}

#banner #text p {
  color: #4D4C4C;
  padding-bottom: 40px;
  line-height: 1.6;
}

#banner #text h1 {
  font-size: 3rem;
  font-weight: 500;
  color: #382C2C;
}

#banner #text button {
  color: white;
  font-size: 20px;
  padding: 15px 30px;
  background-color: #27AE60;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

#banner #text button:hover {
  background-color: #1e8a4a;
}

#banner #image {
  flex: 1;
  text-align: right;
}

#banner #image img {
  width: 80%;
}

/* Faixa de informações */
#faixinha ul {
  display: flex;
  border-bottom: #27AE60 2px solid;
  padding: 50px 0 50px 0;
  justify-content: center;
}

#faixinha ul li {
  display: flex;
  align-items: center;
}

#faixinha ul li img {
  width: 40px;
  margin-right: 15px;
}

#faixinha ul li.prioridade {
  border-left: #7B7881 2px solid;
  margin-left: 100px;
  padding-left: 100px;
}

#faixinha h3 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #382C2C;
}

/* Grid de jogos */
.lancamentos {
  text-align: center;
  margin: 50px 0 30px;
  font-size: 2.5rem;
  color: #333;
}

.wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat((4, 1fr));
  gap: 30px;
  padding: 20px 0;
}

.card {
  background: white;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.card .img {
  padding: 0px 20px 20px 20px;
  text-align: center;
}

.game-image {
  object-fit: contain;
  transition: transform 0.3s;
  border-radius: 4PX;
}

.card:hover .game-image {
  transform: scale(1.05);
}

.card h2 {
  padding: 0px 20px 5px;
  font-size: 1.2rem;
}

.card h2 a {
  color: #333;
  text-decoration: none;
}

.card h2 a:hover {
  color: #27AE60;
}

.card .text {
  padding: 0 20px 20px;
}

.desenvolvedor {
  color: #666;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.card h3 {
  color: #27AE60;
  font-size: 1.4rem;
  margin: 10px 0;
}

.comprar {
  width: 100%;
  padding: 10px;
  background-color: #27AE60;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.comprar:hover {
  background-color: #1e8a4a;
}

.comprar:active {
  transform: scale(0.98);
}

/* Mensagem do carrinho */
.mensagem-carrinho {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #27AE60;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  font-size: 16px;
  font-weight: bold;
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Contador do carrinho */
.carrinho-icon {
  position: relative;
  display: inline-block;
}

.contador {
  position: absolute;
  top: 15px;
  right: 5px;
  background: #1d8548;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

/* Footer */
footer{
    background-color: #2c3e60;
    margin-top: 100px;
    color: #F1F1F1;
    padding: 40px;
    display: flex;
  }
  footer div.divisao1{
    margin: 0 1100px 0 100px;
  }
  footer div p.principal{
    margin: 0 0 20px 0;
    font-weight: 450;
  }
  footer div.divisao1 img{
    margin: 0 20px 0 0;
  }
  footer div ul li{
    list-style: none;
    display: flex;
  }
  footer div.divisao2 ul li img{
    margin: 0 10px 20px -40px;
  }
  footer div.cartoes img{
    margin: 40px 15px 70px 0;
  }
  div.footinho{
  border-top: #F1F1F1 1px solid;
  }
  p.transp{
    margin: 0 0 0 -620px;
  }
</style>