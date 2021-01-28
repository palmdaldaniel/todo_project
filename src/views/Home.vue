<template>
  <div class="home">
    <div class="wrapper">
      <div class="todos">
        <h1>Things todo</h1>
        <todos />
      </div>
      <div class="done-todos">
      <h1> Completed todos </h1>
        <doneTodos />
      </div>
    </div>
  </div>
</template>

<script>
import todos from "../components/todos.vue";
import doneTodos from "../components/doneTodos.vue";

// @ is an alias to /src

export default {
  components: {
    todos,
    doneTodos,
  },
};
</script>

<style scoped>
.home {
  width: 80%;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 3vh;
  color: white; 
}


.wrapper {
  display: flex;

  flex-direction: column;
/*   max-width: 800px; */

}


@media only screen and (min-width: 800px) {

.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

}



</style>