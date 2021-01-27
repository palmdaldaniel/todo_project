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

h1 {
  color: #2f2f2f;
}

p {
  font-family: Open Sans;
  color: rgb(20, 20, 20);
}

.up-and-down,
.done {
  width: 30px;
}

.content-container {
  display: flex;
  background:rgba(252, 230, 195, 0.692);
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

.action p {
  padding: 0.3em;
  color: #141414;
}

.action p:hover, img:hover, button:hover {
  cursor: pointer;
}


.info {
  padding-left: 0.5em;
}

.info p {
  font-size: 10px;
}

button {
  border: none;
  border-radius: 5px;
  background: black;
  color: #ffffff;
  padding: 0.3em;
  font-size: 14px;
}
</style>