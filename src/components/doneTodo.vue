<template>
  <div class="done-todo-card">
    <div class="content-container">
      <div class="info">
        <p>{{ doneTodo.date + " - " + doneTodo.time }}</p>
        <p>{{ doneTodo.descripion }}</p>
        <p>{{ doneTodo.author }}</p>
        <p class="remove" @click="removeTodo"><b>X</b></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["doneTodo"],
  methods: {
    removeTodo() {
      console.log('Hello remove me')
      this.$store.commit("removeTodoFromList", this.doneTodo);
    }
  }
};
</script>

<style scoped>
.done-todo-card {
  text-decoration: line-through;
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
  min-width: 300px;
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
  font-size: 1rem;
  font-weight: bold;
}

</style>