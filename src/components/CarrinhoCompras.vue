<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const irParaHome = () => {
  router.push('/');
};

const carrinho = ref([]);

const adicionarAoCarrinho = (novoItem) => {
  const itemExistente = carrinho.value.find(item => 
    item.id === novoItem.id && 
    item.titulo === novoItem.titulo && 
    item.autor === novoItem.autor
  );
  
  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.value.push({
      ...novoItem,
      quantidade: 1
    });
  }
};

const aumentarQuantidade = (item) => {
  item.quantidade++;
};

const diminuirQuantidade = (item) => {
  if (item.quantidade > 1) {
    item.quantidade--;
  } else {
    carrinho.value = carrinho.value.filter(i => i !== item);
  }
};

const totalItens = computed(() => {
  return carrinho.value.reduce((total, item) => total + item.quantidade, 0);
});

const totalCompra = computed(() => {
  return carrinho.value.reduce((total, item) => total + (item.valor * item.quantidade), 0);
});

onMounted(() => {
  if (route.query.carrinho) {
    try {
      const dados = JSON.parse(route.query.carrinho);
      const carrinhoAgrupado = [];
      
      dados.forEach(item => {
        const itemExistente = carrinhoAgrupado.find(i => 
          i.id === item.id && 
          i.titulo === item.titulo && 
          i.autor === item.autor
        );
        
        if (itemExistente) {
          itemExistente.quantidade += item.quantidade || 1;
        } else {
          carrinhoAgrupado.push({
            ...item,
            quantidade: item.quantidade || 1
          });
        }
      });
      
      carrinho.value = carrinhoAgrupado;
    } catch (e) {
      console.error("Erro ao parsear o carrinho da query string", e);
    }
  }
});
</script>


<template>
  <header>
    <h3><a href="#" @click.prevent="irParaHome">IFbooks</a></h3>
    <p>apreço a <br> leitura</p>
    <input type="text" id="searchInput" placeholder="Pesquisar">
    <button onclick="pesquisar()"><img src="../Images/icons/procurar.png" alt=""></button>
    <ul>
      <li><a href="#">Termos</a></li>
      <li><a href="#">Equipe</a></li>
      <li><a href="#">Envio</a></li>
      <span><li><a href="#">Devoluções</a></li></span>
    </ul>
    <span><a @click="redirecionarParaOutraPagina" href="#"><img src="../Images/icons/carrinho-de-compras.png" alt=""></a></span>
    <span><a href="#"><img src="../Images/icons/coracao.png" alt=""></a></span>
    <a href="#"><img src="../Images/icons/do-utilizador.png" alt=""></a>
  </header>
  <div v-if="carrinho.length > 0" class="compras">
    <h2 id="carrinho">Carrinho</h2>
    <div class="carrinho-cabecalho">
      <h2>Título</h2>
      <h2><span class="quantidade">Quantidade</span></h2>
      <h2>Subtotal</h2>
    </div>

    <article v-for="item in carrinho" :key="item.id" class="item-carrinho">
      <img :src="item.livro" alt="Capa do livro" width="70" />
      <div class="info">
        <div class="emparelhado">
          <div class="titulo">
            <h3>{{ item.titulo }}</h3>
            <p>{{ item.autor }}</p>
            <p>Preço: R${{ item.valor.toFixed(2) }}</p>
          </div>

          <div class="controles-quantidade">
            <button @click="diminuirQuantidade(item)">-</button>
            <span>{{ item.quantidade }}</span>
            <button @click="aumentarQuantidade(item)">+</button>
          </div>
          
          <div class="info-subtotal">
            <p>R${{ (item.valor * item.quantidade).toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </article>
    <div class="resumo-compra">
      <p>Total de itens: {{ totalItens }}</p>
      <p class="total-compra">Total da compra: R${{ totalCompra.toFixed(2) }}</p>
      <button class="finalizar-compra">Finalizar Compra</button>
    </div>
  </div>

  <div v-else class="nada">
    <p>Seu carrinho está vazio.</p>
  </div>

  <footer>
    <div class="divisao1">
      <p class="principal">IFbooks</p>
      <a href="#"><img src="../Images/icons/facebook.png" alt="facebook"></a>
      <a href="#"><img src="../Images/icons/instagram.png" alt="instagram"></a>
      <a href="#"><img src="../Images/icons/twitter.png" alt="twitter"></a>
    </div>
    <div class="divisao2">
      <p class="principal">Contato</p>
      <ul>
        <li><img src="../Images/icons/Phone.png" alt="Telefone"><p>+55 47 40045263</p></li>
        <li><img src="../Images/icons/Clock.png" alt="Relógio"><p>8h às 23h - Seg a Sex</p></li>
        <li><img src="../Images/icons/Mail.png" alt="Email"><p>contato@ifbooks.com</p></li>
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
article li {
  display: flex;
  padding: 10px 10px 5px 20px;
  border-bottom: #dedede 2px solid;
}

/** inicio carrinho */

div.nada {
  text-align: center;
  padding-top: 100px;
  font-size: 3rem;
}

.carrinho-cabecalho {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #27AE60;
  font-weight: bold;
  align-items: center;
}

.carrinho-cabecalho h2:first-child {
  flex: 2;
  text-align: left; 
}

.carrinho-cabecalho h2:nth-child(2) {
  flex: 1;
  text-align: center;
  padding-right: 140px;
}

.carrinho-cabecalho h2:last-child {
  flex: 1;
  text-align: right;
  padding-right: 40px;
}

div.titulo {
  padding: 10px 100px 0 0;
  font-size: 1.3rem;
  white-space: nowrap;
}

.item-carrinho {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}

.item-carrinho img {
  width: 115px;
  height: auto;
  margin-right: 20px;
  border-radius: 4px;
}

.controles-quantidade {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 40px 0 0 260px ;
}

.info-subtotal {
  flex: 1;
  text-align: right;
  padding-left: 580px;
  padding-top: 55px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  white-space: nowrap;
  font-size: 1.5rem;
}

/**
.item-carrinho {
  display: flex;
  padding: 15px;
  border-bottom: 2px solid #dedede;
  align-items: flex-start;
}

.item-carrinho img {
  margin-right: 20px;
}

.total {
  font-weight: bold;
  margin-top: 20px;
}
*/

.quantidade {
  display: flex;
  align-items: center;
  margin-top: 10px;
}


.compras {
  max-width: 1600px;
  margin: auto;
  padding: 20px;
}

h2#carrinho {
  color: #28a745;
  font-weight: 600;
  font-size: 1.8rem;
}

.item-carrinho {
  display: grid;
  grid-template-columns: 115px 2fr 1fr 1fr;
  align-items: start; 
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  gap: 20px;
}

.item-carrinho img {
  width: 115px;
  height: auto;
  border-radius: 4px;
}

.info-livro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 10px 0;
}

.info-livro h3 {
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
}

.info-livro p {
  color: #555;
  margin: 4px 0;
  line-height: 1.4;
}

.controles-quantidade button {
  width: 30px;
  height: 30px;
  font-size: 16px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preco-unitario {
  font-size: 0.9rem;
  color: #666;
  margin-top: 8px;
}

.resumo-compra {
  margin-top: 30px;
  text-align: right;
  padding: 20px;
  border-top: 2px solid #27AE60;
}

.total-compra {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
}

.finalizar-compra {
  background-color: #27AE60;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.finalizar-compra:hover {
  background-color: #1d8548;
}

div.emparelhado {
  display: flex;
}

</style>