<script setup>
import { ref, onMounted, nextTick  } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const game = ref(null)
const carrinho = ref([])

const mensagemCarrinho = ref('');
const mostrarMensagem = ref(false);

defineProps({
  id: {
    type: [String, Number],
    required: true
  }
})

function mostrarAlerta(tituloJogo) {
  mensagemCarrinho.value = `🎮 "${tituloJogo}" adicionado ao carrinho!`;
  mostrarMensagem.value = true;
  setTimeout(() => {
    mostrarMensagem.value = false;
  }, 2500);
}

import { todosJogos } from '@/data/jogos';

onMounted(() => {
  const gameId = parseInt(route.params.id)
  game.value = todosJogos.find(g => g.id === gameId)
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  

  const carrinhoSalvo = sessionStorage.getItem('carrinho')
  if (carrinhoSalvo) {
    carrinho.value = JSON.parse(carrinhoSalvo)
  }
})

function adicionarAoCarrinho(jogo) {
  console.log("Jogo sendo adicionado:", JSON.stringify(jogo, null, 2));
  if (!jogo) {
    console.error("Jogo não encontrado:", jogo);
    return;
  }

  const valor = typeof jogo.valor === 'string' 
    ? parseFloat(jogo.valor.replace(',', '.')) 
    : jogo.valor;

  const itemExistente = carrinho.value.find(i => i.id === jogo.id);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    const itemComValor = {
      ...jogo,
      valor: valor,
      quantidade: 1
    };
    carrinho.value.push(itemComValor);
  }

  sessionStorage.setItem('carrinho', JSON.stringify(carrinho.value));
  mostrarAlerta(jogo.titulo);
}

const voltarParaHome = async () => {
  await router.push('/');
  await nextTick();

  window.scrollTo({
    top: 1000,
    behavior: 'instant' 
  });
  await new Promise(resolve => setTimeout(resolve, 1));
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

</script>

<template>
  
  
  <div v-if="game" class="pagina-game">
    <button @click="voltarParaHome" class="botao-voltar">◄ Voltar</button>
    
    <div class="container-game">
      <div class="capa-container">
        <img :src="game.imagem" :alt="game.titulo" class="capa-game">
      </div>
      
      <div class="info-game">
        <h1>{{ game.titulo }}</h1>
        <h2>Desenvolvido por {{ game.desenvolvedor }}</h2>
        
        <div class="detalhes">
          <p><strong>Plataformas:</strong> {{ game.plataformas.join(', ') }}</p>
          <p><strong>Lançamento:</strong> {{ game.lancamento }}</p>
          <p><strong>Classificação:</strong> {{ game.classificacao }}</p>
        </div>
        
        <div class="preco-container">
          <h3>R$ {{ game.valor.toFixed(2) }}</h3>
          <button @click="adicionarAoCarrinho(game)" class="botao-comprar">
            Adicionar ao Carrinho
          </button>
        </div>
        
        <div class="descricao">
          <h3>Sobre o Jogo</h3>
          <p>{{ game.descricao }}</p>
        </div>
      </div>
    </div>
    <div v-if="mostrarMensagem" class="mensagem-carrinho">
      {{ mensagemCarrinho }}
    </div>
  </div>
  
  <div v-else class="game-nao-encontrado">
    <h2>Jogo não encontrado</h2>
    <button @click="router.push('/')" class="botao-voltar">Voltar para a loja</button>
  </div>
  <footer>
    <div class="divisao1">
      <p class="principal">IFgames</p>
      <a href="https://www.facebook.com/?locale=pt_BR"><img src="/Images/icons/facebook.png" alt="facebook"></a>
      <a href="https://www.instagram.com/"><img src="/Images/icons/instagram.png" alt="instagram"></a>
      <a href="https://x.com/?lang=pt"><img src="/Images/icons/twitter.png" alt="twitter"></a>
    </div>
    <div class="divisao2">
      <p class="principal">Contato</p>
      <ul>
        <li><img src="/Images/icons/Phone.png" alt="Telefone">
          <p>+55 47 40045263</p>
        </li>
        <li><img src="/Images/icons/Clock.png" alt="Relógio">
          <p>8h às 23h - Seg a Sex</p>
        </li>
        <li><img src="/Images/icons/Mail.png" alt="Email">
          <p>contato@ifgames.com</p>
        </li>
      </ul>

      <div class="cartoes">
        <img src="/Images/paipalCard-Logo.png" alt="PayPal">
        <img src="/Images/MasterCard-Logo.png" alt="MasterCard">
        <img src="/Images/VISA-card-logo.png" alt="Visa">
      </div>
      <p class="transp">&copy; Alguns direitos reservados. IFgames 2025.</p>
    </div>
  </footer>
</template>

<style scoped>
.pagina-game {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.botao-voltar {
  background: none;
  border: none;
  color: #1a1a2e;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

.botao-voltar:hover {
  text-decoration: underline;
}

.container-game {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.capa-container {
  flex: 1;
  max-width: 400px;
}

.capa-game {
  width: 100%;
  margin-top: 50px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.info-game {
  flex: 2;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: left;
}

h2 {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
  font-weight: normal;
}

.detalhes {
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.detalhes p {
  margin: 0.5rem 0;
  color: #555;
}

.preco-container {
  margin: 2rem 0;
}

.preco-container h3 {
  font-size: 1.8rem;
  color: #e94560;
  margin-bottom: 1rem;
}

.botao-comprar {
  background-color: #1a1a2e;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botao-comprar:hover {
  background-color: #0f3460;
}

.descricao {
  margin-top: 2rem;
  line-height: 1.6;
}

.descricao h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
}

.descricao p {
  color: #555;
}

.game-nao-encontrado {
  text-align: center;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .container-game {
    flex-direction: column;
  }
  
  .capa-container {
    max-width: 100%;
    margin: 0 auto;
  }
}

.mensagem-carrinho {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e94560;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  font-size: 1rem;
  z-index: 1000;
  transition: opacity 0.5s ease-in-out;
}
</style>