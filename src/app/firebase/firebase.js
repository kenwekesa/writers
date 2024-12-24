import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo1OLzyvVSzyXUilsi42oCw8Rh5qturOQ",
  authDomain: "amzoncorp-c7478.firebaseapp.com",
  projectId: "amzoncorp-c7478",
  storageBucket: "amzoncorp-c7478.appspot.com",
  messagingSenderId: "344737648860",
  appId: "1:344737648860:web:9b643c590a53d59341a419",
  measurementId: "G-YSHQ5755ZJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app 
export const storage = getStorage(app)



