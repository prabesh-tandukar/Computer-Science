<script setup>
import Welcome from "./components/pages/Welcome.vue";
import Layout from "./components/layouts/Layout.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Workout from "./components/pages/Workout.vue";

const selectedDisplay = 2;
</script>

<template>
  <Layout>
    <!-- Page 1 -->
    <Welcome v-if="selectedDisplay == 1" />
    <!-- page 2 -->
    <Dashboard v-if="selectedDisplay == 2" />
    <!-- page 3 -->
    <Workout v-if="selectedDisplay == 3" />
  </Layout>
</template>

<style scoped></style>
