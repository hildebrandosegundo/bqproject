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
      <div class="col s4 card-action">
        <a class="waves-effect waves-light btn indigo accent-1 darken-4" href="#/questoes/novo">Criar nova Questão</a>
      </div>
      <form class="col s4 card-action" id="search">
        Pesquisar
        <input name="query" v-model="searchQuery">
      </form>
      <div class="card-content">
        <table class="bordered">
          <thead>
          <tr>
            <th>ID</th>
            <th>AREA</th>
            <th>SERIE</th>
            <th>NIVEL</th>
            <th>CATEGORIA</th>
            <th>HABILIDADE</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="questao in questoes.data" @click="goTo(questao.id)">
            <td>
              <small>{{questao.id}}</small>
            </td>
            <td>
              <small>{{questao.area.area}}</small>
            </td>
            <td>
              <small>{{questao.serie.serie}}</small>
            </td>
            <td>
              <small>{{questao.nivel.nivel}}</small>
            </td>
            <td>
              <small>{{questao.categoria.categoria}}</small>
            </td>
            <td>
              <small>{{questao.habilidade.habilidade}}</small>
            </td>
          </tr>
          </tbody>
        </table>
        <pagination totalPerPage="15" resource="pquestoes"></pagination>
      </div>
      <div class="card-action">
        <a class="waves-effect waves-light btn indigo accent-1 darken-4" href="#/questoes/novo">Criar nova Questão</a>
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
