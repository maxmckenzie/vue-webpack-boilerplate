<template>
  <div>
    <div class="menu">
      <router-link :to=" { name: 'home' }">Home</router-link>
      <router-link :to=" { name: 'auth' }">Login</router-link>
      <button v-on:click="userLogout">Logout</button>
      <router-link :to=" { name: 'dashboard' }">Dashboard</router-link>
    </div>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import firebase from 'firebase'

export default {
  name: 'app',
  components: {
    Hello
  },
  methods: {
    userLogout () {
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
      }, function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
