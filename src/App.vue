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
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Rubik&display=swap');


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins;
  font-size: 1.1rem
}

body {
  background: url('https://images.unsplash.com/photo-1516074269859-f54ee0d65fa7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80');
  background-size: cover;
  min-height:  100vh; 
}


</style>
