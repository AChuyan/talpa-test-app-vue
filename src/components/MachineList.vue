<template>
  <div class="machine-list">
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
}
</script>

<style scoped>

</style>


