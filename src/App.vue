<template>
  <div>
    <div class="menu">
      <router-link :to=" { name: 'home' }">Home</router-link>
      <router-link :to=" { name: 'auth' }">Auth</router-link>
    </div>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
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
