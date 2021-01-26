<template>
<div class="todo" @click="removeTodo">

   <h1> {{ todos.title }} </h1>
    <p class="made"> {{ todos.author}}</p>
    <p class="made"> {{ todos.date }}  </p>
    <p class="made"> {{ todos.time }}  </p>
    <h3> {{todos.descripion}} </h3>

    <!-- <div class="content">
    </div> -->

</div>
   
</template>

<script>
export default {

    props: ['todos'],
    methods: {
        removeTodo(){
            console.log('remove: ', this.todos)
            this.$store.commit('removeTodoFromList',this.todos)

            
        }
    }

}
</script>

<style>

.made {
    font-size: 10px;
}

.todo {
 /*    border: 1px solid black; */
    border-radius: 10px;
    width: 50%;
    padding: 0.5rem;
    margin-bottom: 2vh;
    background: rgb(204, 203, 203)
}

.todo:hover {
    background: rgb(219, 219, 219);
    cursor: pointer;
}



</style>