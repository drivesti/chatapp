import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyDM74djTZR2g_vzck2xGhGO_tHSGWSQAdE",
    authDomain: "chat-app-9ed6b.firebaseapp.com",
    databaseURL: "https://chat-app-9ed6b.firebaseio.com",
    projectId: "chat-app-9ed6b",
    storageBucket: "chat-app-9ed6b.appspot.com",
    messagingSenderId: "816367724242",
    appId: "1:816367724242:web:bf593845692a036c00af0b"

}

firebase.initializeApp(firebaseConfig)

export default firebase