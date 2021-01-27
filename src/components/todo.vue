<template>
  <div class="todo-card">
    <div class="up-and-down">
      <img src="../assets/up.svg" alt="" v-on:click="moveUp" />
      <img src="../assets/down.svg" alt="" v-on:click="moveDown" />
    </div>
    <div class="content-container">
      <div class="info">
        <p>{{ todos.date + " - " + todos.time }}</p>
        <h1>{{ todos.descripion }}</h1>
        <p>{{ todos.author }}</p>
      </div>
      <div class="action">
        <p class="remove" @click="removeTodo"><b>X</b></p>
        <button class="remove" v-on:click="todoIsDone">Done</button>
      </div>
    </div>
  </div>
  <!-- todo-card ends -->
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
    todoIsDone() {
      this.$store.commit("todoDone", this.todos);
    },
    moveUp() {
      this.$store.commit("moveUpTheList", this.todos);
    },
    moveDown() {
      this.$store.commit("moveDownTheList", this.todos);
    },
  },
};
</script>

<style scoped>
.todo-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
}

h1, p {
    color: #333333;
}



.up-and-down,
.done {
  width: 30px;
  
}

.content-container {
  display: flex;
  background: rgba(255, 255, 255, 0.242);
  width: 20vw;
  height: 100px;
  justify-content: space-between;
  align-items: center;
   border-radius: 10px;
}

.action {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  padding-right: 0.5em;
}

.remove {
  align-self: flex-end;
  margin-bottom: 0.5em;
}

.action p{
    padding: 0.3em;
}

.action p:hover{
    cursor: pointer;
}

.info {
  padding-left: 0.5em;
}

.info p {
  font-size: 10px;
}
</style>