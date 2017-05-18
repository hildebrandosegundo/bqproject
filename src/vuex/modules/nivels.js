/**
 * Created by hildebrandosegundo on 17/05/17.
 */
import Vue from 'vue'

export default {
  state: {
    nivelList: []
  },
  mutations: {
    updateNivelList (state, data) {
      state.nivelList = data
    }
  },
  actions: {
    getNivel (context) {
      Vue.http.get('api/nivels').then(response => {
        context.commit('updateNivelList', response.data)
      })
    }
  }
}
