<script>
  export default {
    name: 'questoes-create',
    data: function () {
      return {
        sub_title: 'Editar questão',
        questao1: {},
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
      onFileChange (e, img) {
        const files = e.target.files || e.dataTransfer.files
        if (!files.length) {
          return
        }
        this.createImage(files[0], img)
      },
      createImage (file, img) {
        const reader = new FileReader()
        const vm = this

        reader.onload = (e) => {
          if (img === 1) { vm.image_enu = e.target.result }
          if (img === 2) { vm.image_alt1 = e.target.result }
          if (img === 3) { vm.image_alt2 = e.target.result }
          if (img === 4) { vm.image_alt3 = e.target.result }
          if (img === 5) { vm.image_alt4 = e.target.result }
          if (img === 6) { vm.image_alt5 = e.target.result }
        }
        reader.readAsDataURL(file)
      },
      removeImage: function (img) {
        if (img === 1) { this.image_enu = '' }
        if (img === 2) { this.image_alt1 = '' }
        if (img === 3) { this.image_alt2 = '' }
        if (img === 4) { this.image_alt3 = '' }
        if (img === 5) { this.image_alt4 = '' }
        if (img === 6) { this.image_alt5 = '' }
      },
      save () {
        this.$store.dispatch('updateQuestao', this.questao1).then(() => {
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
      },
      questao () {
        return this.$store.state.questao.questaoView
      }
    },
    created () {
      this.$store.dispatch('getArea')
      this.$store.dispatch('getSerie')
      this.$store.dispatch('getQuestao', this.$route.params.id)
    }
  }

</script>
