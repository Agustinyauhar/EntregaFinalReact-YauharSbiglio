import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyANGbz1KzQY_j_z5kI0xYVm2H2NS7s7CwA",
  authDomain: "ecommerce49900-e43bb.firebaseapp.com",
  projectId: "ecommerce49900-e43bb",
  storageBucket: "ecommerce49900-e43bb.appspot.com",
  messagingSenderId: "321997749744",
  appId: "1:321997749744:web:d11546fcd8adcafb73f135"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)