<template lang="html">
      <div class="row">
    <div class="content-header">
      <h1>Prova <small>Detalhes</small></h1>
      <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <a href="#/">Banco de questões</a> >
          <a href="#/questoes">Provas</a> >
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
            <p>Agência: 0000 / Conta: 0000 </p>
            <p>Banco: Banco título - 000</p>
            <p>Valor inicial da conta: R$ 0,00</p>
          </div>
          <div class="col s3 right-align">
            <p>Saldo: <span class="btn disabled">R$ 0,00</span></p>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <a :href="'#/questoes/2/editar'" class="btn blue">Editar</a>
            <a href="" class="btn red" @click.prevent="remove(1)">Excluir</a>
          </div>
        </div>
      </div>
      <div class="card-action">
        <a href="#/questoes">Voltar</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'accounts-view',
    methods: {
      remove: function (id) {
        this.$router.push('/questoes')
      }
    }
  }
</script>
