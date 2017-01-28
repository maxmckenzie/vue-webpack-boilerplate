<template>
  <div class="auth">
    <h1>Auth</h1>
    Signup
    <form v-on:submit.prevent="doSignup(user)">
      <label for="email">email</label>
      <input id="email" v-model="user.email" type="email" placeholder="email">
      <p>email is: {{ user.email }}</p>

      <label for="password">Password</label>
      <input id="password" v-model="user.password" type="password" placeholder="Password">
      <p>password is: {{ user.password }}</p>
      <button type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

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
    doSignup (user) {
      console.log(`doSignup with ${user.email} ${user.password}`)
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode + errorMessage)
      })
    }
  }
}
</script>
