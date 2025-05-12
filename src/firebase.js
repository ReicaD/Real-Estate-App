import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtpihXSYvj7_ahcfU5TIgsbWbHPHA0apU",
  authDomain: "real-estate-app-9c523.firebaseapp.com",
  projectId: "real-estate-app-9c523",
  storageBucket: "real-estate-app-9c523.appspot.com",
  messagingSenderId: "986104607915",
  appId: "1:986104607915:web:ceeb3dc9f7f9f55ca673ee",
  measurementId: "G-194QPRN592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Google Provider with improved configuration
const googleProvider = new GoogleAuthProvider();
// Add scopes for Google provider
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');
// Set custom parameters - 'select_account' forces account selection even when one account is available
googleProvider.setCustomParameters({
  prompt: 'select_account',
  // Login hint helps reduce friction in the login process
  login_hint: '',
  // Access type for offline access (if needed)
  access_type: 'online'
});

export { auth, db, googleProvider }; 