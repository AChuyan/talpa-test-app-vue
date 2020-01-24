<template>
  <div class="machine-view">
    <h3>Detailed Machine Info</h3>
    <ApolloQuery :query="query" :variables="{ id: $route.params.id }"
    >
      <template slot-scope="{ result: { data, loading } }">
        <div class="loader" v-if="loading">Loading...</div>
        <div class="machine-info" v-if="data && data.machine">
          <h4>{{ getMachineName(data.machine.name) }}</h4>
          <p>Position:
            <span>lat={{ data.machine.lastKnownPosition.lat }}</span>
            <span> lng={{ data.machine.lastKnownPosition.lng }}</span>
          </p>
        </div>
        <sensors-section v-if="data && data.machine" v-bind:sensors="data && data.machine && data.machine.sensors"/>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
  import { machine } from "../../graphql/machine";
  import { getMachineName } from "../../utils/helpers";
  import SensorsSection from "./SensorsSection";

  export default {
    components: {
      SensorsSection
    },
    data() {
      return {
        query: machine,
      }
    },
    methods: {
      getMachineName,
    },
    name: 'machine-view',
  }
</script>

<style scoped>
  .machine-view {
    padding: 0 1rem;
  }
  .machine-info {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
</style>
