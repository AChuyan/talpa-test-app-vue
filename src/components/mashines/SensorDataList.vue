<template>
  <ApolloQuery v-if="sensorId" :query="query" :variables="{ id: sensorId }"
  >
    <template slot-scope="{ result: { data, loading } }">
      <div class="loader" v-if="loading">Loading...</div>
      <ul class="list" v-if="data && data.sensor">
        <li class="list-line">
          <p>Time:</p>
          <p>Value:</p>
        </li>
        <li class="list-line" v-for="item of data.sensor.data" v-bind:key="item.time">
          <p>{{ formatTime(item.time) }}</p>
          <p>{{ item.value }}</p>
        </li>
      </ul>
    </template>
  </ApolloQuery>
</template>

<script>
  import { sensor } from "../../graphql/sensor";
  import { formatTime } from "../../utils/helpers";

  export default {
    data() {
      return {
        query: sensor,
      }
    },
    methods: {
      formatTime,
    },
    name: 'sensor-data-list',
    props: ['sensorId'],
  }
</script>

<style scoped>
  .list {
    padding: 1rem 0;
    margin: 0;
  }
  .list-line {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 1px solid #c5c5c5;
  }
  .list-line:first-of-type {
    background: #c5c5c5;
    font-weight: bold;
  }
  .list-line > p {
    margin: .25rem;
  }
</style>
