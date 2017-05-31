// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(require('vue-moment'))
import App from './App'
import routes from './router'
import VuexStore from './vuex/store'
import LoginIterceptors from './components/Login/interceptors'

Vue.http.options.root = process.env.SERVER

Vue.config.productionTip = false
/* eslint-disable no-new */
const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})

LoginIterceptors.check_empty_token(router)
LoginIterceptors.check_auth()

sync(store, router)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
