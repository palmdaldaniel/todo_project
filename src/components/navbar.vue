<template>

<div class="navbar">

    <router-link to="/">Home</router-link>
    <!-- Here goes the form later on -->
    <router-link to="/todoSite">Todo</router-link>
    <router-link to="/about">About</router-link>


</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>


.navbar {
    padding: 50px;
    background: salmon;
    margin-bottom: 2vh;
}

a {
    text-decoration: none;
    color: black;
    transition: 0.2s;
    margin-right: 2vw;
}

a:hover {
    color: green;
   
}

</style>