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

body {
  background: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
  background-size: cover;
  min-height:  100vh;  /* vh = procent av skärmstorleken */
}


</style>
