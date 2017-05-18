/**
 * Created by hildebrandosegundo on 17/05/17.
 */
import Vue from 'vue'

export default {
  state: {
    questoesList: [],
    questoesView: {}
  },
  mutations: {
    updateQuestoesList (state, data) {
      state.questoesList = data
    },
    updateQuestoesView (state, data) {
      state.questoesView = data
    }
  },
  actions: {
    getQuestoes (context) {
      Vue.http.get('api/questoes').then(response => {
        context.commit('updateQuestoesList', response.data)
      })
    },
    getQuestao (context, id) {
      Vue.http.get('api/questoes/' + id).then(response => {
        context.commit('updateQuestoesView', response.data)
      })
    },
    newQuestao (context, data) {
      Vue.http.post('api/questoes', data)
    },
    updateQuestao (context, params) {
      Vue.http.put('api/questoes/' + params.id, params.data)
    },
    removeQuestao (context, id) {
      Vue.http.delete('api/questoes/' + id)
    }
  }
}
