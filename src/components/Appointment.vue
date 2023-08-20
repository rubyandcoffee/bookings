<script setup lang="ts">
import { ref } from 'vue';
import AppointmentItem from './AppointmentItem.vue'
import axios from 'axios'
import FeatureItem from './FeatureItem.vue';
// let sortBy = 'time'
// const appointments = ref([
//   { time: '10am', appointmentType: 'Massage', staffMember: 'Sarah', available: true },
//   { time: '11am', appointmentType: 'Haircut', staffMember: 'Mike', available: false },
//   { time: '1pm', appointmentType: 'Nails', staffMember: 'Jane', available: true },
//   { time: '2pm', appointmentType: 'Haircut', staffMember: 'Mike', available: true },
//   { time: '3pm', appointmentType: 'Massage', staffMember: 'Sarah', available: false },
//   { time: '4pm', appointmentType: 'Nails', staffMember: 'Jane', available: false },
// ])

let appointments = getAppointments();

function getAppointments() {
  axios
    .get('http://localhost:3000/api/v1/bookings/list')
    .then((response) => {
      console.log(response.data)
      appointments = response.data
    })
}

let results = ref(appointments)

// function sortItems() {
//   if (sortBy === 'availability') {
//     return results.value.sort((a, b) => (a.available < b.available ? 1 : -1));
//   } else {
//     return results.value.sort((a, b) => (a.time < b.time ? -1 : 1));
//   }
// }

function sortByStatus() {
  return results.sort((a, b) => (a.status < b.status ? 1 : -1));
}

function sortByTime() {
  return results.value.sort((a, b) => (a.time < b.time ? -1 : 1));
}

const getInitialItems = () => getAppointments()

function reset() {
  results = getInitialItems()
}
</script>

<template>
  <div class="sortContainer">
    <div id="sortByStatus" class="sortButton" @click="sortByStatus">Sort by status</div>
    <div id="sortByTime" class="sortButton" @click="sortByTime">Sort by time</div>
  </div>
  <!-- <div id="sortByStaffMember"></div> -->
  <!-- <select v-model="sortBy" @change="sortItems">
    <option disabled value="">Select</option>
    <option value="availability">availability</option>
    <option value="time">time</option>
  </select> -->
  <TransitionGroup name="list" tag="div">
    <div v-for="(result, index) in results" :key="index" class="results">
      <AppointmentItem :class="result.available ? 'available' : 'unavailable'">
        <template #time>{{ result.time }}</template>
        <template #staffMember>{{ result.staffMember }}</template>
        <template #appointmentType>{{ result.appointmentType }}</template>
        <template #status>{{ result.available ? 'Available' : 'Unavailable' }}</template>
      </AppointmentItem>
    </div>
  </TransitionGroup>
</template>

<style>
  .sortContainer {
    display: flex;
    padding: 50px;
    padding-left: 0;
  }
  .results {
    display: inline-block;

  }
  .available {
    background: rgb(110, 184, 110);
  }
  .unavailable {
    background: rgb(175, 57, 57);
  }
  .sortButton {
    border: 1px solid rgb(0, 153, 255);
    padding: 20px;
    cursor: pointer;
    margin-right: 5px;
  }

  .list-move, /* apply transition to moving elements */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* ensure leaving items are taken out of layout flow so that moving
    animations can be calculated correctly. */
  .list-leave-active {
    position: absolute;
  }
</style>