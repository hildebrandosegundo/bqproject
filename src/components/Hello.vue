<template>
 <div class="hello">
   <b><h5>{{ msg }}</h5></b><br>
    <b><h5>Descrição</h5></b>
    <p>O sistema é direcionado a criação de provas por meio de um banco de questões.</p>
    <p>É possível realizar no sistema o cadastro de questões com seus respectivos itens.</p><br>
    <h6>Links importantes</h6>
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
