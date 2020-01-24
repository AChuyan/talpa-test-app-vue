<template>
  <div class="machine-list">
    <h2>Machine list component</h2>
    <div>{{ hello }}</div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    hello: gql`query {
      machines {
        id
      }
    }`,
  },
  name: 'machine-list',
}
</script>

<style scoped>

</style>


