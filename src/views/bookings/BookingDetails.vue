<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
const id = route.params.id
import BookingDetails from '../../components/BookingDetails.vue'
</script>

<template>
  <BookingDetails :booking-id="id"></BookingDetails>
</template>
