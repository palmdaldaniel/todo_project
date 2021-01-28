<template>

<div class="addTodo">
    <h1>Add a new todo</h1>
    <form @submit.prevent="">
        <label for="author"></label>
        <input type="text" id="author" v-model="author" placeholder="Todo made by" required> <br>
        <label for="description"></label>
        <input name="" v-model="description" placeholder="Describe it pls ..." id="description" required><br>
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
            if(this.author.length < 2 && this.description.length < 2 ) {
                return
            } else {
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

}
</script>

<style scoped>
h1 {
    color: rgb(249, 249, 249);
}

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
input{ 
  border:0;
  border-bottom:1px solid #555;  
  background:transparent;
  width:100%;
  padding:8px 0 5px 0;
  font-size:16px;
  color:rgb(23, 23, 23);
  }

input:focus{ 
 border:none;	
 outline:none;
 border-bottom:1px solid #fefefe;
 }


</style>