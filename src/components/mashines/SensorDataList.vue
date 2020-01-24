<template>
  <div class="sensor-data-list">
    <ApolloQuery v-if="sensorId" :query="query" :variables="{ id: sensorId }"
    >
      <template slot-scope="{ result: { data, loading } }">
        <div class="loader" v-if="loading">Loading...</div>
        <div v-if="data">
          <p>List on sensors data</p>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
  import { sensor } from "../../graphql/sensor";

  export default {
    data() {
      return {
        query: sensor,
      }
    },
    name: 'sensor-data-list',
    props: ['sensorId'],
  }
</script>
