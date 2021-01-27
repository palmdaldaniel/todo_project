<template>

<div class="todoSite">
      <addTodo />
</div>  
  
</template>

<script>

import addTodo from '../components/addTodo.vue'

export default {
    components: {
        addTodo
        }

}
</script>

<style>


.todoSite{
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}



</style>