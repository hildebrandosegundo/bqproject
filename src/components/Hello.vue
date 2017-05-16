<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h4>Descrição</h4>
    <p>O sistema é direcionado a criação de provas por meio de um banco de questões.</p>
    <p>É possível realizar no sistema o cadastro de questões com seus respectivos itens.</p>

    <h4>Links importantes</h4>
    <ul>
      <li><a href="http://www.qedu.com.br" target="_blank">QEDU</a></li>
      <li><a href="http://www.inep.com.br" target="_blank">INEP</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Bem vindo ao sistema de cadastro de questões e criação de provas!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #6495ED;
  }
</style>
