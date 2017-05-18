/**
 * Created by hildebrandosegundo on 17/05/17.
 */
import Vue from 'vue'

export default {
  state: {
    categoriaList: []
  },
  mutations: {
    updateCategoriaList (state, data) {
      state.categoriaList = data
    }
  },
  actions: {
    getCategoria (context) {
      Vue.http.get('api/categorias').then(response => {
        context.commit('updateCategoriaList', response.data)
      })
    }
  }
}
