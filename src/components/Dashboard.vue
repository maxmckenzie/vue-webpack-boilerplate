<template>
  <h1>Dashboard {{ user }}</h1>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'dashboard',
  data () {
    return {
      user: firebase.auth().currentUser
    }
  }
}
</script>
