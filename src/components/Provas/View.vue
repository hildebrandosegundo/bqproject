<template lang="html">
      <div class="row">
    <div class="content-header">
      <h1>Prova <small>Detalhes</small></h1>
      <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <a href="#/">Banco de questões</a> >
          <a href="#/provas">Provas</a> >
          <span>Detalhes da provas</span>
        </div>
      </div>
      </nav>
    </div>
    <div class="card col s12">
      <div class="card-content">
        <div class="row">
          <div class="col s9">
            <div class="card-title">Detalhes da prova</div>
            <p><b>Código da Prova:</b> 0001 / <b>Área:</b> Matématica </p>
            <p><b>Série:</b> 5º / <b>Nível:</b> 01 / <b>Catégoria:</b> Números e Operações</p>
            <p><b>Habilidade:</b> D23 - Identificação fraçoes equivalentes</p>
          </div>
         </div>
        <div class="row">
          <div class="col s12">
            <a :href="'#/contas/2/editar'" class="btn blue">Editar</a>
            <a href="" class="btn red" @click.prevent="remove(1)">Excluir</a>
          </div>
        </div>
      </div>
      <div class="card-action">
        <a href="#/provas">Voltar</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'accounts-view',
    methods: {
      remove: function (id) {
        this.$router.push('/provas')
      }
    }
  }
</script>
