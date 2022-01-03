import { SET_LOADING, SET_SEARCH_TEARM, SET_COCKTAILS } from './types'
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
  setSearchTerm: (context,payload) => {
    context.commit(SET_SEARCH_TEARM, payload)
  },
  setCocktails: (context,payload) => {
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

