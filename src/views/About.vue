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
      body: `Ignore the squirrels, you'll never catch them anyway. Just going to dip my paw in your coffee and do a taste test - oh never mind i forgot i don't like coffee - you can have that back now cat snacks, but i like cats because they are fat and fluffy yet proudly present butt to human but rub face on owner. Lay on arms while you're using the keyboard always hungry yet purrr purr littel cat, little cat purr purr flex claws on the human's belly and purr like a lawnmower meow loudly just to annoy owners claw at curtains stretch and yawn nibble on tuna ignore human bite human hand fall over dead (not really but gets sypathy). Scratch the box poop on floor and watch human clean up sleep on keyboard, so hey! you there, with the hands.`
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