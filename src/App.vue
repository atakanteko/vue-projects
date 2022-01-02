<template>
  <section class="section-center">
    <form @submit.prevent="handleSubmit">
      <Alert v-if="alert.show" :alert="this.alert" @removeAlert="removeAlert"/>
      <h3>grocery list</h3>
      <div class="form-control">
        <input type="text" class="grocery" placeholder="e.g. a bottle of water" v-model="name"/>
        <button type="submit" class="submit-btn" v-if="isEditing" :class="{disableBtn : btnDisable}">edit</button>
        <button type="submit" class="submit-btn" v-else :class="{disableBtn : btnDisable}">submit</button>
      </div>
    </form>
    <div class="grocery-container" v-if="this.list.length > 0">
      <List :items="this.list" @removeItem="removeItem" @editItem="editItem"/>
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
      },
      btnDisable:true
    }
  },
  watch:{
    name(){
      if (this.name.length > 0){
        this.btnDisable = false
      }
      else {
        this.btnDisable = true
      }
    },
    list(){
      localStorage.setItem('list',JSON.stringify(this.list))
    }
  },
  methods:{
    handleSubmit(){
      if (!this.name){
        // display alert (input is empty)
        this.showAlert(true,'danger','fill input box')
      } else if (this.name && this.isEditing){
        // handle edit
        this.list = this.list.map(item =>{
          if (item.id === this.editID){
            return {...item, title:this.name}
          }
        })
        this.name = ''
        this.editID = null
        this.isEditing = false
        this.showAlert(true,'success','item is edited')
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
    showAlert(show=false,type="",msg="")  {
      this.alert = {...this.alert, show: show, msg: msg, type: type}
    },
    removeAlert(signal){
      this.alert = {...this.alert, show: signal, msg: '', type: ''}
    },
    clearList() {
      this.showAlert(true,"danger","empty list")
      this.list = []
    },
    removeItem(id) {
      this.showAlert(true,"danger","item removed")
      this.list = this.list.filter(m => m.id !== id)
    },
    editItem(id) {
      const targetItem = this.list.find(m => m.id === id);
      this.isEditing = true;
      this.editID = id;
      this.name = targetItem.title
    }
  },
  created() {
    let list = localStorage.getItem('list')
    if (list){
      this.list = JSON.parse(localStorage.getItem('list'))
    } else {
      this.list = []
    }
  }
}
</script>

<style scoped>
 .disableBtn {
   opacity: 0.65;
   pointer-events: none;
 }
</style>
