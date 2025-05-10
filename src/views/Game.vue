<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const game = ref(null)
const carrinho = ref([])

const mensagemCarrinho = ref('');
const mostrarMensagem = ref(false);

function mostrarAlerta(tituloJogo) {
  mensagemCarrinho.value = `🎮 "${tituloJogo}" adicionado ao carrinho!`;
  mostrarMensagem.value = true;
  setTimeout(() => {
    mostrarMensagem.value = false;
  }, 2500);
}

const todosJogos = [
{
  id: 1,
  imagem: '/Images/Elden Ring.png',
  titulo: "Elden Ring",
  desenvolvedor: "FromSoftware",
  valor: 199.90,
  classificacao: "16+",
  descricao: "Elden Ring é um RPG de ação em mundo aberto que mergulha o jogador em uma terra vasta e sombria conhecida como 'The Lands Between'. Desenvolvido por Hidetaka Miyazaki em colaboração com George R. R. Martin, o jogo combina combate desafiador, narrativa profunda e uma atmosfera envolvente. Com liberdade total de exploração, oferece segredos escondidos, masmorras mortais e uma trilha sonora épica.",
  plataformas: ["PS5", "Xbox Series X", "PC"],
  lancamento: "2022"
},
{
  id: 2,
  imagem: '/Images/Cyberpunk 2077.png',
  titulo: "Cyberpunk 2077",
  desenvolvedor: "CD Projekt Red",
  valor: 199.90,
  classificacao: "18+",
  descricao: "Cyberpunk 2077 transporta o jogador para Night City, uma metrópole futurista dominada por megacorporações e transumanismo. Com uma narrativa rica e cheia de escolhas, o jogo mistura ação, exploração e elementos de RPG em primeira pessoa. A personalização de personagens e a liberdade de abordagem tornam cada jornada única.",
  plataformas: ["PS4", "Xbox Series X", "PC", "PS5"],
  lancamento: "2020"
},
{
  id: 3,
  imagem: '/Images/Dead Cells.png',
  titulo: "Dead Cells",
  desenvolvedor: "Playdigious",
  valor: 39.90,
  classificacao: "12+",
  descricao: "Dead Cells é um roguevania com ação rápida e mapas gerados proceduralmente, exigindo reflexos e estratégia do jogador. Mistura combate em plataforma 2D com progressão estilo metroidvania, desafiando os jogadores a melhorar a cada tentativa. Sua estética pixelada e trilha sonora energética completam a experiência viciante.",
  plataformas: ["Switch", "PS4", "PC", "Xbox Series One"],
  lancamento: "2022"
},
{
  id: 4,
  imagem: '/Images/Fallout 4.png',
  titulo: "Fallout 4",
  desenvolvedor: "Bethesda",
  valor: 89.90,
  classificacao: "18+",
  descricao: "Fallout 4 é um RPG de mundo aberto que coloca o jogador em um cenário pós-apocalíptico devastado por guerra nuclear. Com foco em sobrevivência, construção e escolhas morais, o jogo oferece um universo vasto repleto de personagens memoráveis. Personalize armas, armaduras e seu próprio assentamento enquanto busca respostas no Wasteland.",
  plataformas: ["Xbox One", "PS4", "Switch", "PC"],
  lancamento: "2015"
},
{
  id: 5,
  imagem: '/Images/Life is Strange DE.png',
  titulo: "Life is Strange: Double Exposure",
  desenvolvedor: "Square Enix",
  valor: 299.90,
  classificacao: "16+",
  descricao: "Life is Strange é uma narrativa interativa que acompanha Max Caulfield, uma adolescente com a habilidade de voltar no tempo. Suas decisões afetam profundamente os eventos do jogo, tornando cada jornada pessoal e emocional. Ambientado em Arcadia Bay, o jogo explora amizade, perda, bullying e dilemas éticos.",
  plataformas: ["Xbox Series X", "PC", "Switch", "PS5"],
  lancamento: "2024"
},
{
  id: 6,
  imagem: '/Images/The elders scrolls V.png',
  titulo: "The Elder Scrolls V: Skyrim",
  desenvolvedor: "Bethesda",
  valor: 89.90,
  classificacao: "17+",
  descricao: "Skyrim é um RPG de fantasia épica que oferece um mundo aberto vasto, repleto de dragões, magia e missões épicas. Você assume o papel do Dragonborn, um herói destinado a enfrentar uma ameaça ancestral. Com liberdade total para explorar, criar e interagir, o jogo se mantém como referência no gênero.",
  plataformas: ["PS4", "Xbox Series X", "PC"],
  lancamento: "2023"
},
{
  id: 7,
  imagem: '/Images/The Last of Us.png',
  titulo: "The Last of Us",
  desenvolvedor: "Naughty Dog",
  valor: 349.90,
  classificacao: "18+",
  descricao: "The Last of Us é uma narrativa intensa de sobrevivência em um mundo devastado por um fungo mortal que transforma humanos em monstros. Você acompanha Joel e Ellie em uma jornada emocional marcada por perda, esperança e vínculos humanos. Com gráficos cinematográficos e jogabilidade refinada, é um dos jogos mais aclamados da história.",
  plataformas: ["PS4", "PS5", "PC"],
  lancamento: "2024"
},
{
  id: 8,
  imagem: '/Images/Until Dawn.png',
  titulo: "Until Dawn",
  desenvolvedor: "Supermassive Games",
  valor: 224.90,
  classificacao: "18+",
  descricao: "Until Dawn é um thriller interativo onde cada escolha pode ser a diferença entre a vida e a morte dos personagens. O jogo se passa em uma cabana isolada nas montanhas, onde um grupo de jovens é perseguido por uma ameaça misteriosa. Com múltiplos finais e forte carga cinematográfica, a tensão é constante.",
  plataformas: ["PS4", "PS5", "PC"],
  lancamento: "2015"
},
{
  id: 9,
  imagem: '/Images/Sea of thieves.png',
  titulo: "Sea of Thieves",
  desenvolvedor: "Rare",
  valor: 89.90,
  classificacao: "12+",
  descricao: "Sea of Thieves é uma aventura pirata multiplayer onde você e sua tripulação exploram mares abertos, enfrentam criaturas e caçam tesouros. A experiência é altamente cooperativa, com foco na diversão, exploração e batalhas navais. Com constante adição de conteúdo, o jogo oferece diversão contínua em alto-mar.",
  plataformas: ["PS5", "Xbox Series X", "Xbox Series S", "PC"],
  lancamento: "2018"
},
{
  id: 10,
  imagem: '/Images/Street fighter.png',
  titulo: "Street Fighter 6",
  desenvolvedor: "Capcom",
  valor: 169.90,
  classificacao: "12+",
  descricao: "Street Fighter 6 é a nova geração da franquia clássica de luta, trazendo gráficos modernos e mecânicas refinadas. O jogo oferece novos modos de jogo, personagens icônicos e um sistema de treinamento robusto. Ideal para veteranos e iniciantes, entrega combates dinâmicos com alta rejogabilidade competitiva.",
  plataformas: ["PS5", "Xbox Series X", "PC"],
  lancamento: "2023"
},
{
  id: 11,
  imagem: '/Images/Persona 3 Reload.png',
  titulo: "Persona 3 Reload",
  desenvolvedor: "Atlus",
  valor: 219.90,
  classificacao: "16+",
  descricao: "Persona 3 Reload é um remake completo do clássico JRPG, com gráficos atualizados e jogabilidade refinada. A história gira em torno de estudantes com poderes especiais que enfrentam sombras em uma dimensão oculta. Combina combate por turnos, socialização e elementos psicológicos em uma narrativa envolvente.",
  plataformas: ["PS5", "Xbox Series X", "PC"],
  lancamento: "2024"
},
{
  id: 12,
  imagem: '/Images/Metal Gear.png',
  titulo: "Metal Gear Solid Δ: Snake Eater",
  desenvolvedor: "Konami",
  valor: 349.90,
  classificacao: "17+",
  descricao: "Metal Gear Solid Δ é um remake fiel do clássico 'Snake Eater', centrado na origem do lendário Big Boss. O jogo combina furtividade, narrativa complexa e ambientação em selvas hostis da Guerra Fria. Com gráficos renovados e fidelidade à história original, promete agradar fãs antigos e novos jogadores.",
  plataformas: ["PS5", "Xbox Series X", "PC"],
  lancamento: "2023"
}]

onMounted(() => {
  const gameId = parseInt(route.params.id)
  game.value = todosJogos.find(g => g.id === gameId)

  const carrinhoSalvo = sessionStorage.getItem('carrinho')
  if (carrinhoSalvo) {
    carrinho.value = JSON.parse(carrinhoSalvo)
  }
})

function adicionarAoCarrinho() {
  mostrarAlerta(game.value.titulo);
}
</script>

<template>
  
  <div v-if="game" class="pagina-game">
    <button @click="router.go(-1)" class="botao-voltar">◄ Voltar</button>
    
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
    <div v-if="mostrarMensagem" class="mensagem-carrinho">
      {{ mensagemCarrinho }}
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

.mensagem-carrinho {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #27AE60;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  font-size: 1rem;
  z-index: 1000;
  transition: opacity 0.5s ease-in-out;
}
</style>