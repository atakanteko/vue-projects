<template>
  <main>
    <SearchForm />
    <CocktailList />
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
export default {
  name: 'IndexPage',
  components:{
    SearchForm,
    CocktailList
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
