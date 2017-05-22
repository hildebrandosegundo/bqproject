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
      Vue.http.get('api/pquestoes?limit=200').then(response => {
        context.commit('updateQuestoesList', response.data)
      })
    },
    getQuestao (context, id) {
      Vue.http.get('api/pquestoes/' + id).then(response => {
        context.commit('updateQuestoesView', response.data)
      })
    },
    newQuestao (context, data) {
      Vue.http.post('api/pquestoes', data)
    },
    updateQuestao (context, params) {
      Vue.http.put('api/pquestoes/' + params.id, params.data)
    },
    removeQuestao (context, id) {
      Vue.http.delete('api/pquestoes/' + id)
    }
  }
}
