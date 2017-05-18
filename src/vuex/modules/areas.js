/**
 * Created by hildebrandosegundo on 17/05/17.
 */
import Vue from 'vue'

export default {
  state: {
    areaList: []
  },
  mutations: {
    updateAreaList (state, data) {
      state.areaList = data
    }
  },
  actions: {
    getArea (context) {
      Vue.http.get('api/areas').then(response => {
        context.commit('updateAreaList', response.data)
      })
    }
  }
}
