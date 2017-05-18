<script>
  export default {
    name: 'questoes-create',
    data: function () {
      return {
        sub_title: 'Criar questão'
      }
    },
    template: require('./form.html'),
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
