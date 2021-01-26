<template>
  <div class="home">
    <addTodo />
    <todos />
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
