<template>
  <div class="home">
    <div class="wrapper">
   
    <todos />
    </div>
  </div>
</template>

<script>

import todos from '../components/todos.vue'

// @ is an alias to /src


export default {
  components: {
    todos
    
  }
}
</script>

<style scoped>

.home {
  width: 50%;
  margin: 0 auto;
}

</style>