<template>
  <div class="appointment">
    <div class="time">
      <h3>
        <slot name="time"></slot>
      </h3>
    </div>
    <div class="staffMember">
      <h4>
        <slot name="staffMember"></slot>
      </h4>
    </div>
    <div class="appointmentType">
      <h4>
        <slot name="appointmentType"></slot>
      </h4>
    </div>
    <div class="status">
      <p>
        <slot name="status"></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>

h3, h4, p {
  color: rgb(255, 255, 255)
}

.appointment {
  flex: 1;
  margin-left: 1rem;
  padding: 1rem;
  border-radius: 10px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
}
</style>
