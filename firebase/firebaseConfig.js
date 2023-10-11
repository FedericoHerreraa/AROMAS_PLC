import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOi233-x_OtxJRahLjrB3umGYrBw9OQTQ",
  authDomain: "aromas-plc.firebaseapp.com",
  projectId: "aromas-plc",
  storageBucket: "aromas-plc.appspot.com",
  messagingSenderId: "331677670867",
  appId: "1:331677670867:web:6fd453acb18f1cce39a326"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
