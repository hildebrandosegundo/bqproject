/**
 * Created by hildebrandosegundo on 13/05/17.
 */
import Vue from 'vue'

export default {
  state: {
    bankList: []
  },
  mutations: {
    updateBankList (state, data) {
      state.accountList = data
    }
  },
  actions: {
    getBanks (context) {
      Vue.http.get('api/provas').then(response => {
        context.commit('updateProvaList', response.data)
      })
    }
  }
}
