/**
 * Created by hildebrandosegundo on 17/05/17.
 */
import Vue from 'vue'

export default {
  state: {
    enunciadoList: [],
    enunciadoView: {}
  },
  mutations: {
    updateEnunciadoList (state, data) {
      state.enunciadoList = data
    },
    updateEnunciadoView (state, data) {
      state.enunciadoView = data
    }
  },
  actions: {
    getEnunciados (context) {
      Vue.http.get('api/enunciados').then(response => {
        context.commit('updateEnunciadoList', response.data)
      })
    },
    getEnunciado (context, id) {
      Vue.http.get('api/enunciados/' + id).then(response => {
        context.commit('updateEnunciadoView', response.data)
      })
    },
    newEnunciado (context, data) {
      Vue.http.post('api/enunciados', data)
    },
    updateEnunciado (context, params) {
      Vue.http.put('api/enunciados/' + params.id, params.data)
    },
    removeEnunciado (context, id) {
      Vue.http.delete('api/enunciados/' + id)
    }
  }
}
