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
    getHabilidade (context) {
      Vue.http.get('api/habilidades').then(response => {
        context.commit('updateHabilidadeList', response.data)
      })
    }
  }
}
