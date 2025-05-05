<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const game = ref(null)
const carrinho = ref([])

// Lista completa de jogos (pode ser movida para um arquivo JSON depois)
const todosJogos = [
  {
    id: 1,
    imagem: '/src/Images/elden-ring-capa.png',
    titulo: "Elden Ring",
    desenvolvedor: "FromSoftware",
    valor: 199.90,
    descricao: "Elden Ring é um RPG de ação em mundo aberto com elementos de dark fantasy. Desenvolvido pela FromSoftware e dirigido por Hidetaka Miyazaki em colaboração com George R. R. Martin.",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    lancamento: "2022",
    classificacao: "18+"
  },
  {
    id: 2,
    imagem: '/src/Images/game2.png',
    titulo: "Outro Jogo",
    desenvolvedor: "Outra Empresa",
    valor: 149.90,
    descricao: "Descrição detalhada do outro jogo...",
    plataformas: ["PS5", "Switch"],
    lancamento: "2023",
    classificacao: "12+"
  }
]

// Carrega os dados do jogo quando o componente é montado
onMounted(() => {
  const gameId = parseInt(route.params.id)
  game.value = todosJogos.find(g => g.id === gameId)
  
  // Carrega o carrinho do sessionStorage
  const carrinhoSalvo = sessionStorage.getItem('carrinho')
  if (carrinhoSalvo) {
    carrinho.value = JSON.parse(carrinhoSalvo)
  }
})

function adicionarAoCarrinho() {
  if (!game.value) return
  
  const itemExistente = carrinho.value.find(i => i.id === game.value.id)
  
  if (itemExistente) {
    itemExistente.quantidade++
  } else {
    carrinho.value.push({
      ...game.value,
      quantidade: 1
    })
  }
  
  sessionStorage.setItem('carrinho', JSON.stringify(carrinho.value))
  alert(`"${game.value.titulo}" foi adicionado ao carrinho!`)
}
</script>

<template>
  <div v-if="game" class="pagina-game">
    <button @click="router.go(-1)" class="botao-voltar">← Voltar</button>
    
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
          <button @click="adicionarAoCarrinho" class="botao-comprar">
            Adicionar ao Carrinho
          </button>
        </div>
        
        <div class="descricao">
          <h3>Sobre o Jogo</h3>
          <p>{{ game.descricao }}</p>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else class="game-nao-encontrado">
    <h2>Jogo não encontrado</h2>
    <button @click="router.push('/')" class="botao-voltar">Voltar para a loja</button>
  </div>
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
  color: #27AE60;
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
  color: #27AE60;
  margin-bottom: 1rem;
}

.botao-comprar {
  background-color: #27AE60;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botao-comprar:hover {
  background-color: #1e8a4a;
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
</style>