<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/todoSite">Create todo</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  padding: 50px;
  margin-bottom: 2vh;
}

a {
  text-decoration: none;
  color: white;
  transition: 0.2s;
  margin: 2vw;
}

a:hover {
  color: #555;
}
</style>