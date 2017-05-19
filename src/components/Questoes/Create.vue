<script>
  export default {
    name: 'questoes-create',
    data: function () {
      return {
        sub_title: 'Criar questão',
        questao: {},
        alternativa1: {},
        alternativa2: {},
        alternativa3: {},
        alternativa4: {},
        enunciado: {}
      }
    },
    template: require('./form.html'),
    methods: {
      save () {
        this.$store.dispatch('newEnunciado', this.enunciado)
        this.$store.dispatch('newAlternativa', this.alternativa1)
        this.$store.dispatch('newAlternativa', this.alternativa2)
        this.$store.dispatch('newAlternativa', this.alternativa3)
        this.$store.dispatch('newAlternativa', this.alternativa4)
        this.$store.dispatch('newAlternativa', this.questao)
      }
    },
    computed: {
      areas () {
        return this.$store.state.area.areaList
      },
      series () {
        return this.$store.state.serie.serieList
      }
    },
    created () {
      this.$store.dispatch('getArea')
      this.$store.dispatch('getSerie')
    }
  }
</script>
