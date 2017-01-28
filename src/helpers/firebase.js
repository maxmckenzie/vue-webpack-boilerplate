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
  console.log(process.env.apiKey)
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
      console.log(user)
    } else {
      func(false)
      console.log(user)
    }
  },
  function (error) {
    console.log(error)
  })
}
