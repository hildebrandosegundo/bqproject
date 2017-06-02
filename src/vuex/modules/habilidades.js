/**
 * Created by hildebrandosegundo on 17/05/17.
 */
import Vue from 'vue'

export default {
  state: {
    habilidadeList: []
  },
  mutations: {
    updateHabilidadeList (state, data) {
      state.habilidadeList = data
    }
  },
  actions: {
    getHabilidade (context, data) {
      Vue.http.get('api/habilidades?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id + '&where[categoria_id]=' + data.categoria_id).then(response => {
        context.commit('updateHabilidadeList', response.data)
      })
    }
  }
}
