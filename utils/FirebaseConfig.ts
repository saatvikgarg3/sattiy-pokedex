import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB5WU1nUdILfzzDOh2BLJ7fXJ3LjqEoxTw",
  authDomain: "pokedex-saatvik.firebaseapp.com",
  projectId: "pokedex-saatvik",
  storageBucket: "pokedex-saatvik.appspot.com",
  messagingSenderId: "249709592774",
  appId: "1:249709592774:web:bab56ac25afe1494ca97c7",
  measurementId: "G-Q8TMH3D4TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);
export const firebaseDB=getFirestore(app);

export const usersRef=collection(firebaseDB,"users");
export const pokemonListRef=collection(firebaseDB,"pokemonList");