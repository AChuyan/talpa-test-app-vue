<template>
  <p class="machine-coordinates">
    <span>lat={{ get(coordinates, 'lat', placeholder) }}</span>
    <span>lng={{ get(coordinates, 'lng', placeholder) }}</span>
  </p>
</template>

<script>
  import get from "lodash.get";

  export default {
    data() {
      return {
        placeholder: 'unknown',
      }
    },
    methods: {
      get,
    },
    name: 'machine-coordinates',
    props: ['coordinates'],
  }
</script>

<style scoped>
  .machine-coordinates > span {
    font: 500 1rem 'Avenir', Helvetica, Arial, sans-serif;
  }
  .machine-coordinates > span:first-of-type {
    padding-right: .5rem;
  }
</style>
