import firebase from 'firebase'

export function checkUser (loggedIn, user) {
  if (loggedIn) {
    const authenticated = true
    return authenticated
  } else {
    const authenticated = false
    return authenticated
  }
}

export function authenticatedUser () {
  return firebase.auth().currentUser
}

export function fireInit (func) {
  // !!!! Replace with your own Firebase settings !!!!!
  var config = {
    apiKey: 'AIzaSyCbCmlxGQ8TRqd4D-1zpT2YYmHK_d1duvU',
    authDomain: 'vue-boilerplate.firebaseapp.com',
    databaseURL: 'https://vue-boilerplate.firebaseio.com',
    storageBucket: 'vue-boilerplate.appspot.com',
    messagingSenderId: '790723666222'
  }
  firebase.initializeApp(config)

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      func(true, user)
      console.log(`User loggedIn object: ${user}`)
    } else {
      func(false)
      console.log(`No User object: ${user}`)
    }
  },
  function (error) {
    console.log(error)
  })
}
