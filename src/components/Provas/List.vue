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
      <div class="card-content">
        <table class="highlight">
          <thead>
          <tr>
            <th>Listagem de Provas</th>
          </tr>
          </thead>
          <tbody>
          <tr @click="goTo(1)">
            <td class="valign-wrapper">
              Prova - 001 >&nbsp;
              <small> / Prova / Área / Série / Nível / Catégoria / Habilidades / </small>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="card-action">
        <a href="#/provas/novo">Criar nova prova</a>
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
        this.$router.push('/provas/' + id)
      }
    }
  }
</script>
<style>
  /** Style CSS **/
  tbody tr { cursor: pointer}
</style>
