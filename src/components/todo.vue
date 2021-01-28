<template>
  <div class="todo-card">
    <div class="up-and-down">
      <img src="../assets/up.svg" alt="" v-on:click="moveUp" />
      <img src="../assets/down.svg" alt="" v-on:click="moveDown" />
    </div>
    <div class="content-container">
      <div class="info">
        <p>{{ todos.date + " - " + todos.time }}</p>
        <p>{{ todos.descripion }}</p>
        <p>{{ todos.author }}</p>
      </div>
      <div class="action">
        <p class="remove" @click="removeTodo"><b>X</b></p>
        <button class="remove" v-on:click="todoIsDone">Done</button>
      </div>
      <div class="update-wrapper" v-show="update">
        <upDateTodo />
      </div>
      <button @click="upDateTodo">Update</button>
    </div>
  </div>
  <!-- todo-card ends -->
</template>

<script>
import upDateTodo from "./updateTodo.vue";

export default {
  components: {
    upDateTodo,
  },
  props: ["todos"],
  data() {
    return {
      update: false,
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
    upDateTodo() {
      if (this.update == false) {
        this.update = true;
      } else {
        this.update = false;
      }
      console.log("click me");
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
  background: rgba(252, 230, 195, 0.468);
  min-width: 300px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}

.content-container:hover {
  background: rgb(252, 230, 195);
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
  color: #555;
}

.action p:hover,
img:hover,
button:hover {
  cursor: pointer;
}

.info {
  padding-left: 0.5em;
}

.info p {
  font-size: 10px;
}

.info p:nth-child(2) {
  font-size: 1rem;
  font-weight: bold;
}

button {
  border: none;
  border-radius: 5px;
  background: rgb(0, 0, 0);
  color: #ffffff;
  padding: 0.3em;
  font-size: 14px;
}
</style>