<template>
  <div class="todo-card">
     <div v-show="update" class="update">
        <div class="update-info">
          <p @click="edit"><b>X</b></p>
          <p>Edit and press save</p>
          <input type="text" ref="input" /> <br />
          <button @click="updating">Save</button>
        </div>
      </div>
    <div class="up-and-down">
      <img src="../assets/up.svg" alt="" v-on:click="moveUp" />
      <img src="../assets/down.svg" alt="" v-on:click="moveDown" />
    </div>
    <div class="content-container">
      <div class="info">
        <div class="img-cont">
          <img @click="edit" src="../assets/edit-solid.svg" alt="" />
        </div>
        <p>{{ todos.date + " - " + todos.time }}</p>
        <p>{{ todos.descripion }}</p>
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
    edit() {
      if(this.update == false) {
        this.update = true;
      } else {
        this.update = false
      }
    },
    updating() {
      if(this.$refs.input.value.length < 2){
        this.update = false;
      } else {
        this.todos.descripion = this.$refs.input.value;
        this.update = false;
      }

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
  min-width: 280px;
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
  padding: 0.5em 0.2em;
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

.info p:nth-child(3) {
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

.img-cont {
  width: 20px;
}

.update {
  position: absolute;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  height: 200px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.update-info b {
  position: absolute;
  top: 10px;
  left: 320px;
}

.update-info b:hover {
  cursor: pointer;
}
</style>