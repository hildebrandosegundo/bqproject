<template>
  <div class="row">
    <div class="content-header">
      <h1>Provas <small>Gerenciamento de provas</small></h1>
      <nav>
        <div class="nav-wrapper2 row">
          <div class="col s12">
            <a href="#/">Banco de questões</a> >
            <span>Suas provas</span>
          </div>
        </div>
      </nav>
    </div>
    <div class="card col s12">
      <div class="col s4 card-action">
        <a class="waves-effect waves-light btn indigo accent-1 darken-4" href="#/provas/novo">Criar nova prova</a>
      </div>
      <div class="card-content">
        <table class="bordered">
          <thead>
          <tr>
            <th>ID</th>
            <th>AREA</th>
            <th>SERIE</th>
            <th>ANO</th>
            <th>BIMESTRE</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="prova in provas.data" @click="goTo(prova.id)">
            <td>
              <small>{{prova.id}}</small>
            </td>
            <td>
              <small>{{prova.area.area}}</small>
            </td>
            <td>
              <small>{{prova.serie.serie}}</small>
            </td>
            <td>
              <small>{{prova.ano}}</small>
            </td>
            <td>
              <small>{{prova.bimestre}}</small>
            </td>
          </tr>
          </tbody>
        </table>
        <pagination totalPerPage="15" resource="provas"></pagination>
      </div>
      <div class="card-action">
        <a class="waves-effect waves-light btn indigo accent-1 darken-4" href="#/provas/novo">Criar nova prova</a>
      </div>
    </div>
  </div>
</template>
<script>
  // Código javascript
  import Pagination from './../SharedComponents/Pagination'
  export default {
    name: 'provas',
    components: {
      'pagination': Pagination
    },
    methods: {
      goTo: function (id) {
        this.$router.push('/provas/' + id)
      }
    },
    computed: {
      provas () {
        return this.$store.state.pagination.getList
      }
    }
  }
</script>
<style>
  /** Style CSS **/
  tbody tr { cursor: pointer}
</style>
