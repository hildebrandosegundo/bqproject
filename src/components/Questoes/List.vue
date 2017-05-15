<template>
  <div class="row">
    <div class="content-header">
      <h1>Provas <small>Gerenciamento de provas</small></h1>
      <nav>
        <div class="nav-wrapper">
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
            <th>Provas</th>
          </tr>
          </thead>
          <tbody>
          <tr @click="goTo(1)">
            <td class="valign-wrapper">
              Conta título&nbsp;
              <small>agência: 0000 / conta: 0000  / código do banco: 000 </small>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="card-action">
        <a href="#/provas/novo">Nova prova</a>
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
