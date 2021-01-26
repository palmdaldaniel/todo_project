<template>
<div class="todo">

   <h1> {{ todos.title }} </h1>
    <p></p>
    <div class="content">
    <h3> {{todos.descripion}} </h3>
    <p> {{ todos.date }}  </p>
    </div>

</div>
   
</template>

<script>
export default {

    props: ['todos']

}
</script>

<style>


.todo {
    border: 1px solid black;
    border-radius: 10px;
    width: 50%;
    padding: 0.5rem;
}

.content {
    display: flex;
    justify-content: space-between;
}

</style>