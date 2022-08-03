<template>
 
  <CatFood/>
</template>

<script>
import CatFood from './components/CatFood.vue'
export default {
  name: 'App',
  components: {
    CatFood
  }
}
</script>

<style>

@font-face {
  font-family: "Exo2.0";
  src: local("Exo2.0"),
   url(./assets/fonts/Exo2.0-Thin.otf) format("truetype");
}
</style>