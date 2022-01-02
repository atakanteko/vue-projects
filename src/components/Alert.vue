<template>
  <p :class="{'alert alert-success' : this.alert.type==='success','alert alert-danger' : this.alert.type==='danger'}">
    {{this.alert.msg}}
  </p>
</template>

<script>

export default {
  name: 'Alert',
  data() {
    return {

    }
  },
  props:{
    alert:{
      type: Object,
      required: true
    }
  },
  created() {
   setTimeout(()=>{
      this.$emit("removeAlert",false)
    },3000)
  },
}
</script>

<style>

</style>
