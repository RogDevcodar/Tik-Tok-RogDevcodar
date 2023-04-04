import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDnVFFFuPDjtGWoPpIAAx2xJ2quYHjOcUU",
  authDomain: "tik-tok---jornada-8ed05.firebaseapp.com",
  projectId: "tik-tok---jornada-8ed05",
  storageBucket: "tik-tok---jornada-8ed05.appspot.com",
  messagingSenderId: "106618145092",
  appId: "1:106618145092:web:5b798696d339b89728ef11"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;