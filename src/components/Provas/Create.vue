<script>
  var $ = require('jquery')
  window.jQuery = $
  window.$ = $

  export default {
    name: 'provas-create',
    data: function () {
      return {
        sub_title: 'Criar Prova',
        questao: {}
      }
    },
    template: require('./form.html'),
    methods: {
      addQuestao (e) {
        var vm = this.questoes
        $('#buttonAdd').removeClass('pulse')
        this.$store.dispatch('getQuestaoP', this.questao).then(function () {
          $(document).find('#listaQuestao').append(
            '<li>' +
            '<div class="collapsible-header">' +
            '<div class="col s11"><small>Area: ' + vm.data + '</small></div><a @click.prevent="removeQuestao(this.event)" class="btn-floating btn waves-effect waves-light red"><div class="ion-md-trash"></div></a>' +
            '</div>' +
            '<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>' +
            '</li>'
          )
        })
      },
      getNivels () {
        this.$store.dispatch('getNivel', this.questao)
      },
      // busca categoria
      getCategorias () {
        this.$store.dispatch('getCategoria', this.questao)
      },
      // busca habilidade
      getHabilidades () {
        this.$store.dispatch('getHabilidade', this.questao)
      },
      getQuestao () {
        $('#buttonAdd').addClass('pulse')
      },
      removeQuestao (e) {
        console.log('teste:' + e)
        // $(e).closest('li').remove('li')
      }
    },
    computed: {
      areas () {
        return this.$store.state.area.areaList
      },
      series () {
        return this.$store.state.serie.serieList
      },
      nivels () {
        return this.$store.state.nivel.nivelList
      },
      categorias () {
        return this.$store.state.categoria.categoriaList
      },
      habilidades () {
        return this.$store.state.habilidade.habilidadeList
      },
      questoes () {
        return this.$store.state.questao.questoesList
      }

    },
    created () {
      this.$store.dispatch('getArea')
      this.$store.dispatch('getSerie')
    }
  }
</script>
