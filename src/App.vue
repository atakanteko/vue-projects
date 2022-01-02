<template>
  <section class="section-center">
    <form @submit.prevent="handleSubmit">
      <Alert v-if="alert.show"/>
      <h3>grocery list</h3>
      <div class="form-control">
        <input type="text" class="grocery" placeholder="e.g. a bottle of water" v-model="name"/>
        <button type="submit" class="submit-btn" v-if="isEditing">edit</button>
        <button type="submit" class="submit-btn" v-else>submit</button>
      </div>
    </form>
    <div class="grocery-container" v-if="this.list.length > 0">
      <List :items="this.list"/>
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
      if (!this.name){
        // display alert (input is empty)
        console.log("loglog")
      } else if (this.name && this.isEditing){
        // handle edit
      } else {
        // add item and show alert
        console.log("1234")
        const newItem = {
          id: new Date().getTime().toString(),
          title: this.name
        }
        this.list = [...this.list, newItem]
        this.name = ''
      }
    },
  }
}
</script>

<style>

</style>
