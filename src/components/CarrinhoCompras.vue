<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();

const carrinho = ref([]);

onMounted(() => {
  
  if (route.query.carrinho) {
    try {
      carrinho.value = JSON.parse(route.query.carrinho);
    } catch (e) {
      console.error("Erro ao parsear o carrinho da query string", e);
    }
  }
  console.log('Carrinho na página de checkout:', carrinho.value);
});

</script>

<template>
  
   <header>
    <h3><a href="#">IFbooks</a></h3>
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
  <div v-if="carrinho && carrinho.length > 0" class="compras">
   <article>
    <ul>
      <li v-for="item in carrinho" :key="item.id">
        <div>
          <img :src="item.livro" alt="Capa do livro" width="70" />
        </div>
        <div class="text">
          <h2>{{ item.titulo }}</h2>
          <p>{{ item.autor }} </p>
          <h3>R${{ item.valor.toFixed(2) }}</h3>
        </div>
      </li>
    </ul>
   </article>
    <p>Total de itens: {{ carrinho.length }}</p>
  </div>
  
  <div v-else>
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

.text {
  padding-left: 25px;
}

</style>