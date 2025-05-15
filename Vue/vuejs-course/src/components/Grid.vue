<script setup>
import { workoutProgram } from "../utils";
const workoutTypes = ["Push", "Pull", "Legs"];
</script>
<template>
  <section id="grid">
    <button
      :key="workoutId"
      v-for="(workout, workoutIdx) in Object.keys(workoutProgram)"
      class="card-button plan-card"
    >
      <div>
        <p>Day 1</p>
        ICON
      </div>
      <h3>TYPES</h3>
    </button>
  </section>
</template>
<style></style>
