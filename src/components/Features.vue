<script setup lang="ts">
import FeatureItem from './FeatureItem.vue'
import CalendarIcon from './icons/IconCalendar.vue'
import PaymentIcon from './icons/IconPayment.vue'
import MessagesIcon from './icons/IconMessages.vue'
</script>

<template>
  <FeatureItem>
    <template #icon>
      <CalendarIcon />
    </template>
    <template #heading>Bookings</template>
    Create and manage bookings
  </FeatureItem>
  <FeatureItem>
    <template #icon>
      <MessagesIcon />
    </template>
    <template #heading>Messages</template>
    Send and receive messages
  </FeatureItem>
  <FeatureItem>
    <template #icon>
      <PaymentIcon />
    </template>
    <template #heading>Payments</template>
    Payment and invoice management
  </FeatureItem>
</template>