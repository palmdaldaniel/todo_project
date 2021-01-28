<template>


 <div class="update-form" >
     <form @submit.prevent="">
        <input type="text" v-model="desc"> <br>
        <input type="text" v-model="by"> <br>
        <button>Save</button>
     </form>
     </div> 


  
</template>

<script>
export default {
   data() {
      return {
         desc: null,
         by: null,
      }
   }

}
</script>

<style scoped>

.update-form {
   background: rgb(121, 121, 121);
   position: absolute;
   width: 250px;

}


input {
  margin: 1vh 2.5vh;
}



</style>