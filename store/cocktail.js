import { SET_LOADING, SET_SEARCH_TEARM, SET_COCKTAILS } from './types'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
import axios from 'axios';

export const state = () => ({
  loading: false,
  searchTerm: 'a',
  cocktails: []
})

export const getters = {
  getLoading: state => state.loading,
  getSearchTerm: state => state.searchTerm,
  getCocktails: state => state.cocktails
}

export const actions = {
  setLoading: (context,payload) => {
    context.commit(SET_LOADING, payload)
  },
  setSearchTerm:  async (context, payload) => {
    context.commit(SET_SEARCH_TEARM, payload)
    await context.dispatch('setLoading', true)
    try {
      const response = await axios.get(`${url}${context.getters['getSearchTerm']}`)
      const {drinks} = response.data
      console.log(drinks)
      if (drinks) {
        const newCocktails = drinks.map(item => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        await context.dispatch('setCocktails',newCocktails)
      } else {
        await context.dispatch('setCocktails',[])
      }
      await context.dispatch('setLoading', false)
    } catch (error) {
      console.log(error)
      await context.dispatch('setLoading', false)
    }
  },
  setCocktails: async (context, payload) => {
    context.commit(SET_COCKTAILS, payload)
  }
}

export const mutations = {
  [SET_LOADING](state,payload){
    state.loading = payload
  },
  [SET_SEARCH_TEARM](state,payload){
    state.searchTerm = payload
  },
  [SET_COCKTAILS](state,payload){
    state.cocktails = [...state.cocktails, payload]
  }
}



