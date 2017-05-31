<template>
  <div id="app">
    <nav class="blue-grey darken-3 z-index">
      <div class="nav-wrapper row">
        <div class="col s12">
          <a href="#/" class="blue-grey darken-4 brand-logo">Banco de Questões</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#/logout"><i class="ion-log-out"></i></a></li>
          </ul>
          <div class="right-align">
          <img  width="250px" height="63px" src="./assets/LogoSemec.png"/>
          </div>
        </div>
      </div>
    </nav>
    <div class="row" id="main">
      <div class="col s12 m4 l3 indigo accent-1 padding-top" id="left-side">
        <div class="collection">
          <a href="#/" class="collection-item indigo accent-1 white-text">Menu</a>
          <a href="#/Questoes" class="collection-item">Questões</a>
          <a href="#/Provas" class="collection-item">Provas</a>
          <a href="http://localhost:8000/register" class="collection-item">Cadastrar novo usuário</a>
        </div>
        <div class="collection">
          <a href="#/login" @click="logout" class="collection-item">Sair</a>
        </div>
      </div>
      <div class="col s12 m8 l9 grey lighten-3" id="right-side">
        <!--Router View-->
        <router-view></router-view>
        <div class="col s10 grey lighten-2">
          <small>by <a href="http://www.semec.pi.gov.br/"target="_blank">Secretaria Municipal de Educação - SEMEC</a> -  &copy; <span>{{ new Date() | moment("YYYY") }}</span></small>
        </div>
        <div class="col s2 grey lighten-2 right-align">
          <small>v1.0.0@dev</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginIterceptors from './components/Login/interceptors'

  export default {
    name: 'app',
    methods: {
      logout () {
        LoginIterceptors.logout()
      }
    },
    scripts: [
      require('materialize-css/dist/js/materialize.min')
    ],
    styles: [
      require('material-icons/css/material-icons.min.css'),
      require('materialize-css/dist/css/materialize.min.css'),
      require('ionicons/dist/css/ionicons.min.css')
    ]
  }
</script>

<style>
  html, body, #app, #main, #left-side, #right-side {
    min-height: 100%;
    margin: 0px;
  }

  body {
    background-color: #8c9eff !important;
  }

  .nav-wrapper {
    background-color: #ffffff !important;
    color: #F8F8FF;
  }
  .nav-wrapper2 {
    background-color: #8c9eff !important;
    color: #F8F8FF;
  }

  .z-index {
    position: relative;
    z-index: 9;
  }

  .padding-top {
    padding-top: 15px !important;
  }

  .brand-logo {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .divider {
    padding: 5px;
    margin: 20px 0;
  }

  .content-header {
    margin-bottom: 1.68rem;
  }

  .content-header h1 {
    font-size: 28px;
    margin-bottom: 0;
  }

  .content-header h1 small {
    font-size: 70%;
    color: #6495ED;
  }

  table thead tr th:first-child {
    width: 1%;
  }

  table img {
    margin-right: 10px;
  }
</style>
