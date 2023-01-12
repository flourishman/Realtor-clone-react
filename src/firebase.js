// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmXQrOSeJ36yaaqSvc47_0axoWzpdG_WQ",
  authDomain: "realtor-clone-react-bafb1.firebaseapp.com",
  projectId: "realtor-clone-react-bafb1",
  storageBucket: "realtor-clone-react-bafb1.appspot.com",
  messagingSenderId: "956899246478",
  appId: "1:956899246478:web:558a26fa105f0f04b464df",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
