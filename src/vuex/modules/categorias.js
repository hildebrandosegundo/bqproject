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
    getCategoria (context, data) {
      Vue.http.get('api/categorias?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id + '&where[nivel_id]=' + data.nivel_id).then(response => {
        context.commit('updateCategoriaList', response.data)
      })
    }
  }
}
