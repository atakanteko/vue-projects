<template>
  <section class="section-center">
    <form @submit="handleSubmit">
      <Alert v-if="alert.show"/>
      <h3>grocery list</h3>
      <div class="form-control">
        <input type="text" class="grocery" placeholder="e.g. a bottle of water" v-model="name"/>
        <button type="submit" class="submit-btn" v-if="isEditing">edit</button>
        <button type="submit" class="submit-btn" v-else>submit</button>
      </div>
    </form>
    <div class="grocery-container">
      <List />
      <button class="clear-btn">clear items</button>
    </div>
  </section>
</template>

<script>
import List from "./components/List";
import Alert from "./components/Alert";
export default {
  name: 'App',
  components: {
    Alert,
    List
  },
  data() {
    return {
      name: '',
      list: [],
      isEditing: false,
      editID: null,
      alert: {
        show: false,
        msg: '',
        type: ''
      }
    }
  },
  methods:{
    handleSubmit(){
      console.log("loglog")
    }
  }
}
</script>

<style>

</style>
