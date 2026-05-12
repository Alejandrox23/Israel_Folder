<script setup>
//Importamos el uso de las rutas
import { RouterView } from 'vue-router';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';


</script>

<template>
  <Header></Header>
  <Seccion/>

  <RouterView/>
  <Footer></Footer>
</template>

