<template>
  <div>
<!--    <h2>cocktail list component</h2>-->
    <Loading v-if="getLoading"/>
    <h2 v-else-if="getCocktails.length < 1" class="section-title">no cocktails matched your search criteria</h2>
    <h2 v-else>cocktail list</h2>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Loading from "./Loading";
export default {
  components: {Loading},
  computed:{
    ...mapGetters('cocktail',['getLoading','getCocktails'])
  }

}
</script>
