<template>
  <div class="done-todo-card">
    <div class="content-container">
      <div class="info">
        <p>{{ doneTodo.date + " - " + doneTodo.time }}</p>
        <p>{{ doneTodo.descripion }}</p>
        <p>{{ doneTodo.author }}</p>
      </div>
      <p class="remove" @click="removeTodo"><b>X</b></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["doneTodo"],
  methods: {
    removeTodo() {
      this.$store.commit("removeTodoFromList", this.doneTodo);
    },
  },
};
</script>

<style scoped>
.done-todo-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
}

p {
  font-family: Open Sans;
  color: rgb(20, 20, 20);
}

.content-container {
  display: flex;
  background: rgba(252, 230, 195, 0.468);
  min-width: 280px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}

.content-container:hover {
  background: rgb(252, 230, 195);
}

.info {
  padding-left: 0.5em;
}
.info p {
  font-size: 10px;
}
.info p:nth-child(2) {
  text-decoration: line-through;
  font-size: 1rem;
  font-weight: bold;
}
.remove {
  text-decoration: none;
  align-self: flex-start;
  margin: 0.5vw 1vw;
}

.remove:hover {
  cursor: pointer;
}
</style>