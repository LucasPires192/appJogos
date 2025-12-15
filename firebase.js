import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
//import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA755JdEpGC6_h7FK3JbYe6d0T7QVTT6Tw",
    authDomain: "appfirebase-26442.firebaseapp.com",
    projectId: "appfirebase-26442",
    storageBucket: "appfirebase-26442.firebasestorage.app",
    messagingSenderId: "1003548411601",
    appId: "1:1003548411601:web:19e1b520cee0b487a6e7f0",
    measurementId: "G-8D33M6M24X"
};

//Iniciando o firebase
const app = initializeApp(firebaseConfig);
//Fazendo a autenticacao do banco com os dados de login e senha
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
//const auth = getAuth(app);
//puxando os dados do perfil do banco
const db = getFirestore(app);
//Exportando os objetos
export { auth, db };