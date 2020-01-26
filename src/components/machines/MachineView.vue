<template>
  <div class="machine-view">
    <h3>Detailed Machine Info</h3>
    <ApolloQuery :query="query" :variables="{ id: $route.params.id }"
    >
      <template slot-scope="{ result: { data, loading } }">
        <div class="loader" v-if="loading">Loading...</div>
        <div class="machine-info" v-if="data && data.machine">
          <h4>{{ getTitle(data.machine.name) }}</h4>
          <machine-coordinates v-bind:coordinates="get(data, 'machine.lastKnownPosition')"/>
        </div>
        <sensors-section v-if="get(data, 'machine')" v-bind:sensors="get(data, 'machine.sensors')"/>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
  import get from "lodash.get"
  import { machine } from "../../graphql/machine";
  import { getTitle } from "../../utils/helpers";
  import MachineCoordinates from "./MachineCoordinates";
  import SensorsSection from "./SensorsSection";

  export default {
    components: {
      SensorsSection,
      MachineCoordinates,
    },
    data() {
      return {
        coordinatesPlaceholder: 'unknown',
        query: machine,
      }
    },
    methods: {
      get,
      getTitle,
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
