const dayjs = require('dayjs')
<script setup lang="ts">
import { ref, onBeforeMount, type Ref } from 'vue';
import AppointmentItem from './AppointmentItem.vue'
import axios from 'axios'
import FeatureItem from './FeatureItem.vue';
import dayjs from 'dayjs'

onBeforeMount(() => {
  getAppointments()
})

const appointments = ref(null);

function getAppointments() {
  axios
    .get('http://localhost:3000/api/v1/bookings/list')
    .then((response) => {
      appointments.value = response.data
    })
}

function sortByStatus() {
  return appointments.value.sort((a, b) => (a.status < b.status ? 1 : -1));
}

function sortByTime() {
  appointments.value.sort((a, b) => {
    return (a.date) < (b.date) ? -1 : 1
})}

// const getInitialItems = () => getAppointments()

// function reset() {
//   results = appointments;
// }
</script>

<template>
  <div class="appointmentsList" v-if="appointments">
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
      <div v-for="(result, index) in appointments" :key="index" class="results">
        <AppointmentItem :class="result.status ? 'available' : 'unavailable'">
          <template #time>{{ dayjs(result.date).format('HH:mm on ddd DD MMMM') }}</template>
          <template #staffMember>{{ result.staff_member.name }}</template>
          <template #appointmentType>{{ result.service.title }}</template>
          <template #status>{{ result.available ? 'Available' : 'Unavailable' }}</template>
        </AppointmentItem>
      </div>
    </TransitionGroup>
  </div>
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