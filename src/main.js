// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { fireInit, checkUser } from './helpers/firebase'

Vue.use(VueRouter)

fireInit(checkUser)

const router = new VueRouter({
  mode: '',
  // https://router.vuejs.org/en/essentials/history-mode.html
  routes: [{
    path: '/',
    name: 'home',
    component: function (resolve) {
      require(['./components/Hello.vue'], resolve)
    }
  }, {
    path: '/auth',
    name: 'auth',
    component: function (resolve) {
      require(['./components/Auth.vue'], resolve)
    }
  }, {
    path: '*',
    name: '404',
    component: function (resolve) {
      require(['./components/404.vue'], resolve)
    }
  }]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
