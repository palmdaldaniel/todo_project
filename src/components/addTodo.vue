<template>

<div class="addTodo">
    <h1>Make new todo</h1>
    <li v-show="validation"> add a little bit more</li>
    <form @submit.prevent="">
        <label for="author"></label>
        <input type="text" id="author" v-model="author" placeholder="Todo made by" required> <br>
        <label for="description"></label>
        <input name="" v-model="description" placeholder="Describe it pls ..." id="description" required><br>
        <button @click="addTodo">Add todo</button> 
    </form>
</div>

  
</template>

<script>


export default {

    data() {
        return {
            author: null,
            date: null,
            description: null,
            validation: false
        }
    },
    methods: {
        addTodo(){
            if(this.author.length < 2 || this.description.length < 2 ) {
                this.validation = true;
                return
            } else {
                let todo = {
                    author: 'Added by: ' + this.author,
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString().slice(0,5),
                    descripion: this.description
                }
                console.log('submitting', todo)
                this.title = null;
                this.author = null;
                this.description = null;
                this.date = null;
                this.$store.commit('addTodoToList', todo)
                this.$router.push('/')
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

button {
  border: none;
  border-radius: 5px;
  background: rgb(28, 28, 28);
  color: #ffffff;
  padding: 0.5em 2.5em;
  font-size: 16px;
}

button:hover {
    background: rgb(18, 18, 18);
    cursor: pointer;
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