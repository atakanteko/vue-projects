<template>
  <div>
    <SingleCocktail :new-cocktail="newCocktail"/>
  </div>
</template>

<script>
import SingleCocktail from '../../../components/SingleCocktail'
import axios from 'axios';
export default {
  components:{
    SingleCocktail
  },
  async asyncData({ params }) {
    console.log("id", params.id)
    const drink = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
    )

    if (drink.data.drinks[0]) {
      const {
        strDrink: cocktailName,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = drink.data.drinks[0]
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ]
      const newCocktail = {
        cocktailName,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      }
      return { newCocktail };
    }
  }
}
</script>
