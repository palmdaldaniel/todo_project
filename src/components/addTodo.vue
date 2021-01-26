<template>

<div class="addTodo">
    <h1>Add a new todo</h1>
    <form @submit.prevent="addTodo">
        <label for="title"></label>
        <input type="text" name="" v-model="title" id="title" required> <br>
        <label for="description"></label>
        <input type="text" name="" v-model="description" id="description" required> <br>
        <button> Add Todo </button>
    </form>
</div>
  
</template>

<script>
export default {
    data() {
        return {
            title: null,
            date: null,
            description: null,
        }
    },
    methods: {
        addTodo(){
            let todo = {
                title: this.title,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                descripion: this.description
            }
            console.log('submitting', todo)
            this.title = null;
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