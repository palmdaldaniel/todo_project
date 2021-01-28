<template>
  <div class="done-todos">
   
      <doneTodo v-for="(todo, i) in doneTodos" 
                :key="i"
                v-bind:doneTodo="todo"/>
  </div>

</template>

<script>
import doneTodo from './doneTodo.vue'

export default {

components: {
    doneTodo
},

computed: {
    doneTodos() {
        return this.$store.state.doneTodos
    }
}

}
</script>

<style>

</style>