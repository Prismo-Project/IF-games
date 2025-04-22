<script setup>
import { ref } from "vue";

const catalago = ref('')
const filmes = ref([
  
])
</script>

<template>
<head>
</head>
  

  <h1>Hello World</h1>
  <article v-for="catalago in filmes" :key="catalag.id">
      <h3>{{  }}</h3>
      <p>{{  }}</p>
    </article>
   
</template>

<style scoped>

</style>