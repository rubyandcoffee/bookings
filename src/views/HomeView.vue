<script setup lang="ts">
import Features from '../components/Features.vue'
</script>

<template>
  <main>
    <h3>Welcome to the Booking App!</h3>
    <div id="features-container">
      <Features />
    </div>
  </main>
</template>
<style scoped>
  h3 {
    margin-top: 4rem;
    text-align: center;
  }
    #features-container {
    margin-top: 2rem;
  }
</style>