<template>

<div class="addTodo">
    <h1>Add a new todo</h1>
    <form @submit.prevent="">
        <input type="text" v-model="author" placeholder="Todo made by" required> <br>
        <label for="title"></label>
        <input type="text" name="" v-model="title" placeholder="Todo goes here" id="title" required> <br>
        <label for="description"></label>
        <input type="text" name="" v-model="description"  placeholder="Describe it pls ..." id="description" required> <br>
      <!--   <button @click="moveToHome"> Add Todo </button> -->
        <button @click="addTodo"><router-link to="/"> Add Todo </router-link></button> 
    </form>
</div>

  
</template>

<script>


export default {
  
    
    data() {
        return {
            author: null,
            title: null,
            date: null,
            description: null,
        }
    },
    methods: {
        addTodo(){
            let todo = {
                title: this.title,
                author: 'Todo made by: ' + this.author,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                descripion: this.description
            }
            console.log('submitting', todo)
            this.title = null;
            this.author = null;
            this.description = null;
            this.date = null;
            this.$store.commit('addTodoToList', todo)
        }
    
    }

}
</script>

<style scoped>

h1, input, button {
    margin-bottom: 2vh ;
}



</style>