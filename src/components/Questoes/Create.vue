<script>
  export default {
    name: 'questoes-create',
    data: function () {
      return {
        sub_title: 'Criar questão',
        questao: {}
      }
    },
    template: require('./form.html'),
    methods: {
      save () {
        this.$store.dispatch('newQuestao', this.questao).then(() => {
          this.$router.push('/questoes')
        })
        // console.log(this.questao)
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
