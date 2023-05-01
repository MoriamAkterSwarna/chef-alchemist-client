// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBByoigW9SSrV7C256sW0T0cSAtUOpnXRU",
  authDomain: "cooking-alchemist.firebaseapp.com",
  projectId: "cooking-alchemist",
  storageBucket: "cooking-alchemist.appspot.com",
  messagingSenderId: "926800846664",
  appId: "1:926800846664:web:d729e0cfe3b85d0a121d7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;