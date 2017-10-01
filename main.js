var user = null
var token = null

var provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('profile')
provider.addScope('email')

function signIn(cb) {
    firebase.auth().signInWithPopup(provider)
}

$('#sign-in').click(function () {
    signIn()
})

$('#sign-out').click(function () {
    firebase.auth().signOut()
})


firebase.auth().onAuthStateChanged(function (user) {
    console.log(user)
    window.user = user;
    if (window.user) {
        $('#sign-in').hide()
        $('#sign-out').show()
    } else {
        $('#sign-in').show()
        $('#sign-out').hide()
    }
});

