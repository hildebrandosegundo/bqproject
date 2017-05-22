<template>
  <div class="row">
    <div class="content-header">
      <h1>Questões <small>Gerenciamento de questões</small></h1>
      <nav>
        <div class="nav-wrapper2 row">
          <div class="col s12">
            <a href="#/">Banco de questões</a> >
            <span>Suas questões</span>
          </div>
        </div>
      </nav>
    </div>
    <div class="card col s12">
      <div class="card-content">
        <table class="highlight">
          <thead>
          <tr>
            <th>Listagem de Questões</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="questao in questoes.data" @click="goTo(questao.id)">
            <td class="valign-wrapper">
              Questão - {{questao.id}} >
              <small> Área: {{questao.area.area}}/ Série: {{questao.serie.serie}} / Nível: {{questao.nivel.nivel}} / Catégoria: {{questao.categoria.categoria}} / Habilidades: {{questao.habilidade.habilidade}} </small>
            </td>
          </tr>
          </tbody>
        </table>
        <pagination totalPerPage="15" resource="pquestoes"></pagination>
      </div>
      <div class="card-action">
        <a href="#/questoes/novo">Criar nova Questão</a>
      </div>
    </div>
  </div>
</template>
<script>
  // Código javascript
  import Pagination from './../SharedComponents/Pagination'
  export default {
    name: 'questoes',
    components: {
      'pagination': Pagination
    },
    methods: {
      goTo: function (id) {
        this.$router.push('/questoes/' + id)
      }
    },
    computed: {
      questoes () {
        return this.$store.state.pagination.getList
      }
    }
  }
</script>
<style>
  /** Style CSS **/
  tbody tr { cursor: pointer}
</style>
