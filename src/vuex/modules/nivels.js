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
    getNivels (context) {
      Vue.http.get('api/nivels').then(response => {
        context.commit('updateNivelList', response.data)
      })
    },
    getNivel (context, data) {
      Vue.http.get('api/nivels?where[serie_id]=' + data.serie_id + '&where[area_id]=' + data.area_id).then(response => {
        context.commit('updateNivelList', response.data)
      })
    }
  }
}
