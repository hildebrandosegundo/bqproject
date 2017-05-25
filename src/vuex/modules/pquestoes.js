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
    updateQuestao (context, data) {
      Vue.http.put('api/pquestoes/' + data.get('id'), {
        'serie_id': data.get('serie_id'),
        'area_id': data.get('area_id'),
        'nivel_id': data.get('nivel_id'),
        'categoria_id': data.get('categoria_id'),
        'habilidade_id': data.get('habilidade_id'),
        'enunciado': data.get('enunciado'),
        'imagem': data.get('imagem'),
        'imagemAl1': data.get('imagemAl1'),
        'imagemAl2': data.get('imagemAl2'),
        'imagemAl3': data.get('imagemAl3'),
        'imagemAl4': data.get('imagemAl4'),
        'imagemAl5': data.get('imagemAl5'),
        'correta': data.get('correta'),
        'alternativa1': data.get('alternativa1'),
        'alternativa2': data.get('alternativa2'),
        'alternativa3': data.get('alternativa3'),
        'alternativa4': data.get('alternativa4'),
        'alternativa5': data.get('alternativa5')
      }
    )
    },
    removeQuestao (context, id) {
      Vue.http.delete('api/pquestoes/' + id)
    }
  }
}
