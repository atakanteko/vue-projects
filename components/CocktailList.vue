<template>
  <div>
    <Loading v-if="getLoading"/>
    <h2 v-else-if="getCocktails.length < 1" class="section-title">no cocktails matched your search criteria</h2>
    <section v-else class="section">
      <h2 class="section-title">cocktails</h2>
      <div class="cocktails-center">
        <Cocktail v-for="(item,index) in getCocktails[0]" :key="index" :item="item"/>
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Loading from "./Loading";
import Cocktail from "./Cocktail";
export default {
  components: {Cocktail, Loading},
  computed:{
    ...mapGetters('cocktail',['getLoading','getCocktails'])
  },
  methods:{
    ...mapActions({
      setCocktails: 'cocktail/setCocktails',
      setSearchTerm: 'cocktail/setSearchTerm'
    }),
  },
  created() {
    this.setSearchTerm("d")
  },
}
</script>
