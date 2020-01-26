<template>
  <div class="machine-view">
    <h3>Detailed Machine Info</h3>
    <ApolloQuery :query="query" :variables="{ id: $route.params.id }"
    >
      <template slot-scope="{ result: { data, loading } }">
        <div class="loader" v-if="loading">Loading...</div>
        <div class="machine-info" v-if="get(data, 'machine')">
          <h4 class="machine-view-title">Machine: {{ getTitle(data.machine.name) }}</h4>
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
  .machine-view-title {
    text-transform: capitalize;
  }
  .machine-info {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 420px) {
    .machine-info {
      flex-direction: column;
    }
    .machine-view-title {
      margin: 0;
    }
  }
</style>
