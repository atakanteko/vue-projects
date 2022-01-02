<template>
  <section class="section-center">
    <form @submit.prevent="handleSubmit">
      <Alert v-if="alert.show" :alert="this.alert" @removeAlert="removeAlert"/>
      <h3>grocery list</h3>
      <div class="form-control">
        <input type="text" class="grocery" placeholder="e.g. a bottle of water" v-model="name"/>
        <button type="submit" class="submit-btn" v-if="isEditing">edit</button>
        <button type="submit" class="submit-btn" v-else>submit</button>
      </div>
    </form>
    <div class="grocery-container" v-if="this.list.length > 0">
      <List :items="this.list" @removeItem="removeItem"/>
      <button class="clear-btn" @click="clearList">clear items</button>
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
        this.showAlert(true,'danger','please enter value')
      } else if (this.name && this.isEditing){
        // handle edit
      } else {
        // add item and show alert
        this.showAlert(true,'success','item added to the list')
        const newItem = {
          id: new Date().getTime().toString(),
          title: this.name
        }
        this.list = [...this.list, newItem]
        this.name = ''
      }
    },
    showAlert(show=false,type="",msg=""){
      this.alert = {...this.alert, show: show, msg: msg, type: type}
    },
    removeAlert(signal){
      this.alert = {...this.alert, show: signal, msg: '', type: ''}
    },
    clearList(){
      this.showAlert(true,"danger","empty list")
      this.list = []
    },
    removeItem(id){
      this.showAlert(true,"danger","item removed")
      this.list = this.list.filter(m => m.id !== id)
    }
  }
}
</script>

<style>

</style>
