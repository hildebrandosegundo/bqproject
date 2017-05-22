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
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRiZTU2N2VlMjczMmZjMDFkNjQ5OWIwN2I5MzhhODM5Njg2YjkzZTU4NmE0NDQ2ODgwZjE4OGQwYTI0ZWM5ZmI3YmNjYTU3OTUwZDNmMTVkIn0.eyJhdWQiOiIyIiwianRpIjoiNGJlNTY3ZWUyNzMyZmMwMWQ2NDk5YjA3YjkzOGE4Mzk2ODZiOTNlNTg2YTQ0NDY4ODBmMTg4ZDBhMjRlYzlmYjdiY2NhNTc5NTBkM2YxNWQiLCJpYXQiOjE0OTUyMjAxNDMsIm5iZiI6MTQ5NTIyMDE0MywiZXhwIjoxNTI2NzU2MTQzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JLr2gDbeXbye_PVvTRkerIhxNb1qzSAWUDrc-TFbg9uF7PA4MeuAtMuVXyu1mhMo02TV1TNzBEpumh8kWpZczBa_Ao6kxDfswo8_UqnVnT6KHg5bptrxgW079v3pflorANtLpCFPLARZyYOHaYt68_PoakX-m-_VS7tsqgssRbJ2UIA-28FflDPA6e1ksuzgGQOPNM1hobtItgZhiTWm-XC8Z4QBlsLvl2t6a883m6ImZNqOftDveobkVqhiXVhPMS8toadc1iukrvqzqfZJ0i13xl_-HHLm4sZRI7y3db1lPJLE3Wl_wtMmTTiPcEWDfVzmhxKrMrfWH8oXp3If--vC7T3crLH3sC7QE7WSoEaetUKSgkla56C76Q359nU04_DWJWibv4UQqDU7LIfM_FEi_-HE504-klJ6X5mnvlkztYS9XiZagEWgWG87bgJPwRjQW90p23y5JEEZ_Cq6oSUSTitka4Kzs5hEE9x1imbRXZn5yxysuCRUS-a427Otn5MCDAesUKzn9pJycPLAQ_IKfOxsv9cZegJyFVoAdFbQWAmpBd7ueQ8-stKPDCCBXfRPwcaMHs4_pf-0kJfkLqoIVxYt2ibVV1vl3AU1sw7BqGzQiBy0isy2qxhYa2tXbK6P_t3mURl6NE1BpqX8_rh6tw55O4SCta0OAtFR2fA')
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
