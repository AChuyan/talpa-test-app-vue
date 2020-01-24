<template>
  <router-link :to="routerLink" class="machine-list-item">
    <p>{{ title }}</p>
  </router-link>
</template>

<script>
  export default {
    name: 'machine-list-item',
    props: ['machine'],
    computed: {
      routerLink: function () {
        return `/machine/${this.machine.id}`;
      },
      title: function () {
        return this.machine.name.split('_').join(' ');
      }
    }
  }
</script>

<style scoped>
  .machine-list-item {
    color: #032036;
    text-decoration: none;
  }

  .machine-list-item:hover {
    color: #344974;
    text-decoration: underline;
  }

  .machine-list-item:visited {
    color: #032036;
  }

  .machine-list-item > p {
    font: 500 1rem 'Avenir', Helvetica, Arial, sans-serif;
    text-transform: capitalize;
    text-align: left;
  }
</style>


