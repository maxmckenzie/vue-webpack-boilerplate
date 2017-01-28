<template>
  <div class="auth">
    <h1>Auth</h1>
    Signup
    <form v-on:submit="doSignup">
      <label for="email">email</label>
      <input id="email" v-model="user.email" type="email" placeholder="email">

      <label for="password">Password</label>
      <input id="password" v-model="user.password" type="password" placeholder="Password">
      <button type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'auth',
  data () {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    doSignup () {
      console.log('doSignup')
    }
  }
}
</script>
