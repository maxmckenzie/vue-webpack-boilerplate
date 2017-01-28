import firebase from 'firebase'

export function checkUser (loggedIn, user) {
  if (loggedIn) {
    let authenticated = true
    return authenticated
  } else {
    let authenticated = false
    return authenticated
  }
}

export function fireInit (func) {
  // !!!! Replace with your own Firebase settings !!!!!
  var config = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: ''
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
