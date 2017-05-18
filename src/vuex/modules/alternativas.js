/**
 * Created by hildebrandosegundo on 17/05/17.
 */
import Vue from 'vue'

export default {
  state: {
    alterantivaList: [],
    alternativaView: {}
  },
  mutations: {
    updateAlternativaList (state, data) {
      state.alterantivaList = data
    },
    updateAlternativaView (state, data) {
      state.alternativaView = data
    }
  },
  actions: {
    getAlternativas (context) {
      Vue.http.get('api/alternativas').then(response => {
        context.commit('updateAlternativaList', response.data)
      })
    },
    getAlternativa (context, id) {
      Vue.http.get('api/alternativas/' + id).then(response => {
        context.commit('updateAlternativaView', response.data)
      })
    },
    newAlternativa (context, data) {
      Vue.http.post('api/alternativas', data)
    },
    updateAlternativa (context, params) {
      Vue.http.put('api/alternativas/' + params.id, params.data)
    },
    removeAlternativa (context, id) {
      Vue.http.delete('api/alternativas/' + id)
    }
  }
}
