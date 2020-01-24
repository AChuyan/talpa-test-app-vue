<template>
  <div class="machine-list">
    <h2>Machine list component</h2>
    <ApolloQuery :query="query"
    >
      <template slot-scope="{ result: { data, loading } }">
        <div class="loader" v-if="loading">Loading...</div>
        <ul v-if="data && data.machines">
          <li v-bind:key="machine.id" v-for="machine of data.machines" class="machine-card">
            {{ machine.name }}
          </li>
        </ul>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import { ApolloQuery } from 'vue-apollo';
import { machines } from '../../graphql/machines';

export default {
  data () {
    return {
      query: machines,
    }
  },
  components: {
    ApolloQuery,
  },
  name: 'machine-list',
}
</script>

<style scoped>

</style>


