<template>
  <div class="machines-list-page">
    <h3>List of available machines</h3>
    <machine-list />
  </div>
</template>

<script>
  import MachineList from '@/components/machines/MachineList'

  export default {
    components: {
      MachineList,
    },
    name: 'machines-page',
  }
</script>
