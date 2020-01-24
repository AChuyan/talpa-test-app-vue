<template>
  <div class="sensors-section">
    <h3>Please select Sensor</h3>

    <select class="sensor-select" v-model="selectedSensorId">
      <option
        v-for="sensor of sensors"
        v-bind:key="sensor.id"
        v-bind:value="sensor.id"
      >
        {{sensor.name}}
      </option>
    </select>

    <div v-if="selectedSensorId">
      {{selectedSensorId}}
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedSensorId: null
      }
    },
    name: 'sensors-section',
    props: ['sensors'],
  }
</script>

<style scoped>
  .sensor-select {
    font: 1rem 'Avenir', Helvetica, Arial, sans-serif;
    height: 2rem;
    width: 100%;
  }
</style>
