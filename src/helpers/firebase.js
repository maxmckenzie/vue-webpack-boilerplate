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
    apiKey: 'AIzaSyBoQK5_QZSp52sZHHTQgu59BO6hblUJ5Yk',
    authDomain: 'trading-bot-development.firebaseapp.com',
    databaseURL: 'https://trading-bot-development.firebaseio.com',
    storageBucket: 'trading-bot-development.appspot.com',
    messagingSenderId: '874572235372'
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
