<template>
  <div class="sensor-data-list">
    <p>{{selectedSensorId}}</p>

  </div>
</template>

<script>
  export default {
    name: 'sensor-data-list',
    props: ['sensorId'],
  }
</script>
