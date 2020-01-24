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

    <sensor-data-list v-if="selectedSensorId" v-bind:sensorId="selectedSensorId" />
  </div>
</template>

<script>
  import SensorDataList from './SensorDataList';

  export default {
    components: {
      SensorDataList,
    },
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
