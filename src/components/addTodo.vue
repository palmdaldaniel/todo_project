<template>

<div class="addTodo">
    <h1>Add a new todo</h1>
    <form @submit.prevent="">
        <input type="text" v-model="author" placeholder="Todo made by" required> <br>
        <label for="description"></label>
        <textarea name="" v-model="description"  placeholder="Describe it pls ..." id="description" required> </textarea><br>
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
                author: 'Added by: ' + this.author,
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

textarea {
    resize: none;
}

button {
  border: none;
  border-radius: 5px;
  background: black;
  color: #ffffff;
  padding: 0.3em;
  font-size: 14px;
}
a {
    color: white;
    text-decoration: none;
}



</style>