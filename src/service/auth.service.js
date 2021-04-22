import firebase from 'firebase'
import firebaseApp from '../service/firebase_config'


class AuthService {
    login(providerName) {
        const authProvider= new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged( user => {
            onUserChanged(user);
        })
    }

    logout() {
        firebase.auth().signOut();
    }
}

export default AuthService;