<template>
  <div class="machine-list">
    <ApolloQuery :query="query"
    >
      <template slot-scope="{ result: { data, loading } }">
        <div class="loader" v-if="loading">Loading...</div>
        <ul v-if="data && data.machines">
          <machine-list-item v-for="machine of data.machines" v-bind:machine="machine" v-bind:key="machine.id" />
        </ul>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
  import { ApolloQuery } from 'vue-apollo';
  import { machines } from '../../graphql/machines';
  import MachineListItem from './MachineListItem';

  export default {
    data() {
      return {
        query: machines,
      }
    },
    components: {
      ApolloQuery,
      MachineListItem,
    },
    name: 'machine-list',
  }
</script>
