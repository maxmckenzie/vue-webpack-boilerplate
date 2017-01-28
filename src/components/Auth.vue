<template>
  <div class="auth">
    <h1>Auth</h1>
    <div v-if="authType === 'register'">
      Signup
      <form v-on:submit.prevent="userSignUp(user)">
        <label for="email">email</label>
        <input id="email" v-model="user.email" type="email" placeholder="email">
        <br>

        <label for="password">Password</label>
        <input id="password" v-model="user.password" type="password" placeholder="Password">
        <br>

        <label for="password">Confirm Password</label>
        <input id="password" v-model="user.password" type="password" placeholder="Password">
        <br>
        <button type="submit">Sign up</button>
      </form>
      <button type="button" v-on:click="switchAuthType('login')">Login</button>
    </div>
    <div v-else>
      login
      <form v-on:submit.prevent="userLogin(user)">
        <label for="email">email</label>
        <input id="email" v-model="user.email" type="email" placeholder="email">
        <br>

        <label for="password">Password</label>
        <input id="password" v-model="user.password" type="password" placeholder="Password">
        <br>
        <button type="submit">Login</button>
      </form>
      <button type="button" v-on:click="switchAuthType('register')">Register</button>
    </div>
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
      },
      authType: null
    }
  },
  methods: {
    userSignUp (user) {
      console.log(`userSignUp with ${user.email} ${user.password}`)
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode + errorMessage)
      })
    },
    userLogin (user) {
      console.log(`userLogin with ${user.email} ${user.password}`)
      firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode + errorMessage)
      })
    },
    switchAuthType (authType) {
      this.authType = authType
      console.log(`AuthType: ${this.authType}`)
    }
  }
}
</script>
