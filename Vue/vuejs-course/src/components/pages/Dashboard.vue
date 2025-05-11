<script setup>
import { gymHealthFacts } from "../../utils";

//generate a randome int between 0 and array length -1
const randomNumber = Math.floor(Math.random() * gymHealthFacts.length);
const todaysFact = gymHealthFacts[randomNumber];
console.log(todaysFact);
</script>

<template>
  <section id="dashboard">
    <div class="card tip-container">
      <h2>Welcome Gym Junkie</h2>
      <div>
        <p class="tip"><strong>Daily Tip</strong><br />{{ todaysFact }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
