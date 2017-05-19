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
          <tr @click="goTo(1)">
            <td class="valign-wrapper">
              Questão - 001 > &nbsp;
              <small> Prova / Área / Série / Nível / Catégoria / Habilidades </small>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="card-action">
        <a href="#/questoes/novo">Criar nova Questão</a>
      </div>
    </div>
  </div>
</template>
<script>
  // Código javascript
  export default {
    name: 'accounts',
    methods: {
      goTo: function (id) {
        this.$router.push('/questoes/' + id)
      }
    }
  }
</script>
<style>
  /** Style CSS **/
  tbody tr { cursor: pointer}
</style>
