import Vue from 'vue'
import VueRouter from 'vue-router'
import { authenticatedUser } from './helpers/firebase'

Vue.use(VueRouter)

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
    if (!authenticatedUser()) {
      next({
        path: '/auth',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
