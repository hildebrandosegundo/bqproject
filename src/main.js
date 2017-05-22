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

import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.http.options.root = process.env.SERVER
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBjMzlhNGFkZWE1N2MxN2NkYjYxYmMxMjVjMzhhOTZlNGQ5MjA5Y2Y0MWU4ZTg5ZWI4MGI4NmVkM2U0OGE4YmJmMjk0ZmJmY2JmNzYwZWY4In0.eyJhdWQiOiIyIiwianRpIjoiMGMzOWE0YWRlYTU3YzE3Y2RiNjFiYzEyNWMzOGE5NmU0ZDkyMDljZjQxZThlODllYjgwYjg2ZWQzZTQ4YThiYmYyOTRmYmZjYmY3NjBlZjgiLCJpYXQiOjE0OTU0NTYyMzAsIm5iZiI6MTQ5NTQ1NjIzMCwiZXhwIjoxNTI2OTkyMjMwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.g9-gNVxkA-OABB2gGM0h0dHd7b6gylpyfLYafN91-Q-sHXTmmD9M2p6QhpN4mK6b5zKU3otVoAZv0HDvPQNdLHOj2K15nQ_EVQngiBcLieSmwlJQGXSy6UTUSkA4wFZNoFEbtIceOjMflVNuHRboJhstAH3MYGCYDxClPvmkP0rovTd13GtTO9_KduUA_ZV4N625UgoZT16CzL3hjC44_FYTDr0GR7u0cjmFZklxx7ZcVX7DwimTaMKFSTgPwEtBpt9EgKuvK7nmu7Yk7q4BcRx8hr6aZOxx3jZQ8ZPeVEo2eeXJHbNRKBH1RS-tASnKvKXUENJ5aIbXnibX6rjDE6B5hfE_dUuPhYT-1-Lh46v3js6RgKjEQGAaoyGR4Act2d9HYm_pM13-4sxNH7oBDnSKuC7_MF_7EsYUeZLQ19vWOWnnzLGezNQgdd0K-O9p3TmJ0HbBB-ONKwASIWd_bSidi-ag11rQd-xAINfHVbQBOrsDX_9i9x66BVT9scM22D74OwFcHVCzaoDF3SnI5ffq5eFifks1w6rIw0mTdBCHmra-mzO3-Ru_d2n8z_klNyE8URjRX1vSSOHrra-ycfSHBEVn1oHmMXYoSm42Snj7fUryySAzK3M_kV6SRBUlW3OEp2e5WnND_TIW75CwB1d6l5zx-QOJLT_4o2Ncfyk')
  next()
})
Vue.config.productionTip = false
/* eslint-disable no-new */
const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})
sync(store, router)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
