/**
 * Created by hildebrandosegundo on 17/05/17.
 */
import Vue from 'vue'

export default {
  state: {
    serieList: []
  },
  mutations: {
    updateSerieList (state, data) {
      state.serieList = data
    }
  },
  actions: {
    getSerie (context) {
      Vue.http.get('api/series').then(response => {
        context.commit('updateSerieList', response.data)
      })
    }
  }
}
