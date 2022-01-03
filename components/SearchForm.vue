<template>
  <section class="section search">
    <form class="search-form" @submit="handleSubmit">
      <div class="form-control">
        <label>search cocktail</label>
        <input type="text" id="name" v-model="search">
      </div>
    </form>
  </section>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      search:''
    }
  },
  watch:{
    search(){
      this.setSearchTerm(this.search)
    }
  },
  methods:{
    ...mapActions({
      setSearchTerm: 'cocktail/setSearchTerm'
    }),
    handleSubmit(e){
      e.preventDefault()
    }
  }
}
</script>
