<template>
  <div class="todo-card">
    <div class="todo" @click="removeTodo">
      <p class="made">{{ todos.date + " - " + todos.time }}</p>
      <p class="made">{{ todos.author }}</p>
      <h3>{{ todos.descripion }}</h3>
    </div>
    <button v-on:click="moveUp"> Move up the list</button>
    <button v-on:click="moveDown"> Move Down the list</button> <br>
    <button v-on:click="todoIsDone" style="padding: 2px 10px"> X </button>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  data() {
    return {
      styles: {
        "background-color": "blue",
      },
    };
  },
  methods: {
    removeTodo() {
      //console.log("remove: ", this.todos);
      this.$store.commit("removeTodoFromList", this.todos);
    },
    todoIsDone(){
        this.$store.commit('todoDone', this.todos)
    },
    moveUp() {
      this.$store.commit('moveUpTheList', this.todos)
    },
    moveDown(){
        this.$store.commit('moveDownTheList', this.todos)
        
    }
  },
};
</script>

<style>
.made {
  font-size: 10px;
  color: rgb(120, 120, 120);
}

.todo {
  /*    border: 1px solid black; */
  border-radius: 10px;
  width: 50%;
  padding: 0.5rem;
  margin-bottom: 2vh;
  background: rgb(204, 203, 203);
}

.todo:hover {
  background: rgb(219, 219, 219);
  cursor: pointer;
}
</style>