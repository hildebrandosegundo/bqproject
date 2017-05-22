/**
 * Created by hildebrandosegundo on 12/05/17.
 */
import prova from './modules/provas'
import alternativa from './modules/alternativas'
import enunciado from './modules/enunciados'
import questao from './modules/pquestoes'
import habilidade from './modules/habilidades'
import categoria from './modules/categorias'
import nivel from './modules/nivels'
import area from './modules/areas'
import serie from './modules/series'
import pagination from './modules/pagination'
export default {
  modules: {
    prova: prova,
    alternativa: alternativa,
    enunciado: enunciado,
    questao: questao,
    habilidade: habilidade,
    categoria: categoria,
    nivel: nivel,
    area: area,
    serie: serie,
    pagination: pagination
  }
}
