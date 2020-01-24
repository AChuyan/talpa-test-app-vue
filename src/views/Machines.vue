<template>
  <div class="about">
    <h1>This is a machines page</h1>
    <machine-list />
  </div>
</template>

<script>
  import MachineList from '../components/MachineList'

  export default {
    components: {
      MachineList,
    },
    name: 'HelloWorld',
  }
</script>

<style scoped>

</style>



