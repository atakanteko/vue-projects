<template>
  <main>
    <h2>grocery bud setup</h2>
    <Alert />
    <List />
  </main>
</template>

<script>
import Alert from "./components/Alert";
import List from "./components/List";
export default {
  name: 'App',
  components: {
    Alert,
    List
  },
  data() {
    return {

    }
  },
}
</script>

<style>

</style>
