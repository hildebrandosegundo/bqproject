<script>
  // var $ = require('jquery/dist/jquery.min')
  export default {
    name: 'questoes-create',
    data: function () {
      return {
        sub_title: 'Criar questão',
        // questao1: {},
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
      // busca nivel
      getNivels () {
        this.$store.dispatch('getNivel', this.questao1)
      },
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
        let data = new FormData()
        data.append('id', this.$route.params.id)
        data.append('serie_id', this.questao1.serie_id)
        data.append('area_id', this.questao1.area_id)
        data.append('nivel_id', this.questao1.nivel_id)
        data.append('categoria_id', this.questao1.categoria_id)
        data.append('habilidade_id', this.questao1.habilidade_id)
        data.append('enunciado', this.questao1.enunciado || '')
        data.append('imagem', this.image_enu || '')
        data.append('imagemAl1', this.image_alt1 || '')
        data.append('imagemAl2', this.image_alt2 || '')
        data.append('imagemAl3', this.image_alt3 || '')
        data.append('imagemAl4', this.image_alt4 || '')
        data.append('imagemAl5', this.image_alt5 || '')
        data.append('correta', this.questao1.correta || '')
        data.append('alternativa1', this.questao1.alternativa1 || '')
        data.append('alternativa2', this.questao1.alternativa2 || '')
        data.append('alternativa3', this.questao1.alternativa3 || '')
        data.append('alternativa4', this.questao1.alternativa4 || '')
        data.append('alternativa5', this.questao1.alternativa5 || '')

        this.$store.dispatch('updateQuestao', data).then(() => {
          this.$router.push('/questoes')
        })
        // Materialize.toast('I am a toast!', 3000, 'rounded')
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
      nivels () {
        return this.$store.state.nivel.nivelList
      },
      questao1 () {
        var questao = this.$store.state.questao.questoesView
        // console.log('teste: ' + questao.imagem)
        this.image_enu = questao.imagem || ''
        this.image_alt1 = questao.imagemAl1 || ''
        this.image_alt2 = questao.imagemAl2 || ''
        this.image_alt3 = questao.imagemAl3 || ''
        this.image_alt4 = questao.imagemAl4 || ''
        this.image_alt5 = questao.imagemAl5 || ''
        /* $('#img_alt1').attr('src', questao.imagemAl1)
        $('#img_alt2').attr('src', questao.imagemAl2)
        $('#img_alt3').attr('src', questao.imagemAl3)
        $('#img_alt4').attr('src', questao.imagemAl4)
        $('#img_alt5').attr('src', questao.imagemAl5) */
        return questao
      }
    },
    created () {
      this.$store.dispatch('getArea')
      this.$store.dispatch('getSerie')
      this.$store.dispatch('getQuestao', this.$route.params.id)
    }
  }

</script>
