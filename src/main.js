// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue'
import router from './router'
import App from './App'
import { fireInit, checkUser } from './helpers/firebase'

Vue.router = router

fireInit(checkUser)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
