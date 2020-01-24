<template>
  <div class="machine-view">
    <h3>Machine view</h3>
    <ApolloQuery :query="query" :variables="{ id: $route.params.id }"
    >
      <template slot-scope="{ result: { data, loading } }">
        <div class="loader" v-if="loading">Loading...</div>
        <div v-if="data">
          {{data}}
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
  import { machine } from "../../graphql/machine";

  export default {
    data() {
      return {
        query: machine,
      }
    },
    name: 'machine-view',
  }
</script>
