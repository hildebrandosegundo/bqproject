/**
 * Created by hildebrandosegundo on 19/05/17.
 */
/**
 * Created by hildebrandosegundo on 17/05/17.
 */
import Vue from 'vue'

export default {
  state: {
    getList: []
  },
  mutations: {
    updateList (state, data) {
      state.questoesList = data
    }
  },
  actions: {
    getRegistries (context, config) {
      if (!config.page) {
        config.page = 1
      }
      if (!config.limit) {
        config.limit = 200
      }
      Vue.http.get('api/' + config.resource + '?limit=' + config.limit + '&page=' + config.page).then(response => {
        context.commit('updateList', response.data)
      })
    }
  }
}
