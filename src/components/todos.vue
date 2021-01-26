<template>

<div class="todos">
   
    <todo v-for="(todo, i) in todos"
            :key="i"
            :todos="todo" />

</div>
  
</template>

<script>

import todo from "./todo"

export default {

    components: {
        todo
    },
    computed: {
        todos(){
            return this.$store.state.todoList
        }
    }

}
</script>

<style scoped>

</style>