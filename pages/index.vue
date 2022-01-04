<template>
  <main>
    <SearchForm />
    <CocktailList />
  </main>
</template>

<script>
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
export default {
  name: 'IndexPage',
  components:{
    SearchForm,
    CocktailList
  },
}
</script>
