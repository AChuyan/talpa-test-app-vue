<template>
  <div class="machine-view">
    <h3>Detailed Machine Info</h3>
    <ApolloQuery :query="query" :variables="{ id: $route.params.id }"
    >
      <template slot-scope="{ result: { data, loading } }">
        <div class="loader" v-if="loading">Loading...</div>
        <div v-if="data">
          <h4>{{ getMachineName(data.machine.name) }}</h4>
          <p>Position:
            <span> {{ data.machine.lastKnownPosition.lat }}</span>
            <span> {{ data.machine.lastKnownPosition.lng }}</span>
          </p>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
  import { machine } from "../../graphql/machine";
  import { getMachineName } from "../../utils/helpers";

  export default {
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
