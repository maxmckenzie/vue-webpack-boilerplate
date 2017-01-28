// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { fireInit, checkUser, authenticatedUser } from './helpers/firebase'

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
    path: '/dashboard',
    name: 'dashboard',
    component: function (resolve) {
      require(['./components/Dashboard.vue'], resolve)
    },
    meta: { requiresAuth: true }
  }, {
    path: '*',
    name: '404',
    component: function (resolve) {
      require(['./components/404.vue'], resolve)
    }
  }]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!authenticatedUser()) {
      next({
        path: '/auth',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

new Vue({
  el: '#app',
  authenticated: false,
  router,
  template: '<App/>',
  components: { App }
})
