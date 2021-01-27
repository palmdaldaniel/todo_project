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
    display: flex;
    justify-content: center;
    padding: 50px;
    margin-bottom: 2vh;
}

a {
    text-decoration: none;
    color: white;
    transition: 0.2s;
    margin-right: 2vw;
}

a:hover {
    color: green;
   
}

</style>