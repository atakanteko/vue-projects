<template>
  <main>

    <section class='section cocktail-section'>
      <nuxt-link to="/" class="btn btn-primary">Home</nuxt-link>
      <h2 class='section-title'>{{this.newCocktail.cocktailName}}</h2>
      <div class='drink'>
        <img :src="this.newCocktail.image" :alt="this.newCocktail.cocktailName">
        <div class='drink-info'>
          <p>
            <span class='drink-data'>name :</span> {{this.newCocktail.cocktailName}}
          </p>
          <p>
            <span class='drink-data'>category :</span> {{this.newCocktail.category}}
          </p>
          <p>
            <span class='drink-data'>info :</span> {{this.newCocktail.info}}
          </p>
          <p>
            <span class='drink-data'>glass :</span> {{this.newCocktail.glass}}
          </p>
          <p>
            <span class='drink-data'>instructons :</span> {{this.newCocktail.instructions}}
          </p>
          <p>
            <span class='drink-data'>ingredients :</span>
              <span v-for="(item, index) in this.newCocktail.ingredients" :key="index"> {{ item }}</span>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
export default {

  components:{
    SearchForm,
    CocktailList
  },
  data() {
    return {
      cocktail: null
    }
  },
  props:{
    newCocktail:{
      type: Object,
      required: true
    }
  }
}
</script>
