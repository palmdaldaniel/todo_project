<template>
  <div class="home">
    <div class="wrapper">
    <addTodo />
    <todos />
    </div>
  </div>
</template>

<script>
import addTodo from '../components/addTodo.vue'
import todos from '../components/todos.vue'

// @ is an alias to /src


export default {
  components: {
    addTodo,
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