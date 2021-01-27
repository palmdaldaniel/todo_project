<template>
  <div class="about wrapper">
    <div class="container">

    <h1> {{ title }}</h1>
    <p> {{ preamble }} </p>
    <p> {{ body }} </p>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Meow gimme attention',
      preamble: `Throw down all the stuff in the kitchen take a big fluffing crap 💩 jump off balcony, onto stranger's head do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life, so pooping rainbow while flying in a toasted bread costume in space.`,
      body: `Ignore the squirrels, you'll never catch them anyway. Just going to dip my paw in your coffee and do a taste test - oh never mind i forgot i don't like coffee - you can have that back now cat snacks, but i like cats because they are fat and fluffy yet proudly present butt to human but rub face on owner.`
    }
  }
  
}
</script>



<style scoped>


.container {
  width: 35%;
  margin: 10px auto;
}

h1, p {
  margin-bottom: 2vh;
  line-height: 1.7rem;
}

p {
  text-align: justify;
}

</style>