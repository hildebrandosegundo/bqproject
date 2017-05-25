<template lang="html">
      <div class="row">
    <div class="content-header">
      <h1>Questão <small>Detalhes</small></h1>
      <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <a href="#/">Banco de questões</a> >
          <a href="#/questoes">Questões</a> >
          <span>Detalhes da questão</span>
        </div>
      </div>
      </nav>
    </div>
    <div class="card col s12">
      <div class="card-content">
        <div class="row">
          <div class="col s12">
            <div class="card-title">Detalhes da Questão</div>
            <p><b>Código da Prova:</b> {{questao.id}} <b>Área:</b> {{area.area}} </p>
            <p><b>Série:</b> {{serie.serie}} <b>Nível:</b> {{nivel.nivel}} <b>Catégoria:</b> {{categoria.categoria}} </p>
            <p><b>Habilidade:</b> {{habilidade.codigo}} - {{habilidade.habilidade}}</p>
          </div>
          </div>
        <div class="row">
          <div class="col s12">
            <a :href="'#/questoes/' + questao.id + '/editar'" class="btn blue">Editar</a>
            <a href="" class="btn red" @click.prevent="remove(questao.id)">Excluir</a>
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
    name: 'questao-view',
    methods: {
      remove: function (id) {
        this.$store.dispatch('removeQuestao', this.$route.params.id).then(() => {
          this.$router.push('/questoes')
        })
      }
    },
    computed: {
      questao () {
        return this.$store.state.questao.questoesView
      },
      serie () {
        return this.questao.serie || {}
      },
      area () {
        return this.questao.area || {}
      },
      categoria () {
        return this.questao.categoria || {}
      },
      habilidade () {
        return this.questao.habilidade || {}
      },
      nivel () {
        return this.questao.nivel || {}
      }

    },
    created () {
      this.$store.dispatch('getQuestao', this.$route.params.id)
    }
  }
</script>
