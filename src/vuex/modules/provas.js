/**
 * Created by hildebrandosegundo on 17/05/17.
 */
import Vue from 'vue'

export default {
  state: {
    provasList: [],
    provasView: {}
  },
  mutations: {
    updateProvaList (state, data) {
      state.provasList = data
    },
    updateProvaView (state, data) {
      state.provasView = data
    }
  },
  actions: {
    getProvas (context) {
      Vue.http.get('api/provas').then(response => {
        context.commit('updateProvaList', response.data)
      })
    },
    getProva (context, id) {
      Vue.http.get('api/provas/' + id).then(response => {
        context.commit('updateProvaView', response.data)
      })
    },
    newProva (context, data) {
      Vue.http.post('api/provas', data)
    },
    updateProva (context, params) {
      Vue.http.put('api/provas/' + params.id, params.data)
    },
    removeProva (context, id) {
      Vue.http.delete('api/provas/' + id)
    }
  }
}
