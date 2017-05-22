<script>
  export default {
    name: 'questoes-create',
    data: function () {
      return {
        sub_title: 'Criar questão',
        questao: {},
        image_enu: '',
        image_alt1: '',
        image_alt2: '',
        image_alt3: '',
        image_alt4: '',
        image_alt5: ''
      }
    },
    template: require('./form.html'),
    methods: {
      onFileChange (e) {
        const files = e.target.files || e.dataTransfer.files
        if (!files.length) {
          return
        }
        this.createImage(files[0])
      },
      createImage (file) {
        const reader = new FileReader()
        const vm = this

        reader.onload = (e) => {
          vm.image = e.target.result
        }
        reader.readAsDataURL(file)
      },
      removeImage: function (e) {
        this.image = ''
      },
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
