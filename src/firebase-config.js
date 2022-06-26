import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6U0U6EUbpcsdAjnplYSz-UxJ-09YzjCc",

  authDomain: "testeempresa-4072b.firebaseapp.com",

  projectId: "testeempresa-4072b",

  storageBucket: "testeempresa-4072b.appspot.com",

  messagingSenderId: "163747197347",

  appId: "1:163747197347:web:82371d4c623e520c5f2a16",

  measurementId: "G-TRZYTM2SNE"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
