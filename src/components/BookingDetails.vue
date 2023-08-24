<script setup lang="ts">
import { ref, onBeforeMount, popScopeId } from 'vue';
import axios from 'axios'
import dayjs from 'dayjs'

const props = defineProps(['bookingId'])

onBeforeMount(() => {
  getBooking()
})

const booking = ref(null);

function getBooking() {
  axios
    .get('http://localhost:3000/api/v1/bookings/' + props.bookingId)
    .then((response) => {
      booking.value = response.data
    })
}
</script>

<template>
    <h1>Booking Details Page</h1>
    <p>This is a booking for {{ booking.service_name }} with {{ booking.staff_name }} on {{ dayjs(booking.booking_date).format('HH:mm on ddd DD MMMM') }}.</p>
    <p>If you wish to proceed with your reservation, please confirm below:</p>
    <button>Confirm Reservation</button>
</template>