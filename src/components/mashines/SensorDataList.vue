<template>
  <div class="sensor-data-list">
    <p>{{selectedSensorId}}</p>

  </div>
</template>

<script>
  import { sensor } from "../../graphql/sensor";

  export default {
    name: 'sensor-data-list',
    props: ['sensorId'],
  }
</script>
