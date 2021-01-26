<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/navbar.vue'

export default {
  components: {
    Navbar,
  }
  


}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&family=Oswald:wght@500&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Oswald;
  font-size: 1.1rem
}

</style>
