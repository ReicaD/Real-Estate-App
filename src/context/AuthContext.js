import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserPopupRedirectResolver
} from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up with email and password
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Login with email and password
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Google Sign In
  async function loginWithGoogle() {
    try {
      console.log("Attempting Google sign-in...");
      console.log("GoogleProvider config:", googleProvider);
      
      // Use explicit popup resolver to avoid issues with some browsers
      const result = await signInWithPopup(auth, googleProvider, browserPopupRedirectResolver);
      
      console.log("Google sign-in successful:", result.user.displayName);
      return result;
    } catch (error) {
      console.error("Google sign-in error:", error.code, error.message);
      
      // Enhanced error logging and debugging
      if (error.code === 'auth/configuration-not-found') {
        console.error("Firebase OAuth configuration issue - verify your project settings in the Firebase console");
        console.error("Make sure Google sign-in is enabled in Authentication > Sign-in method");
        console.error("Authorized domains should include your current domain:", window.location.hostname);
        console.error("Error details:", error);
      } else if (error.code === 'auth/popup-blocked') {
        console.error("Popup was blocked by the browser. User may need to allow popups for this site.");
      } else if (error.code === 'auth/cancelled-popup-request') {
        console.error("Popup request was cancelled by the user or the browser.");
      } else if (error.code === 'auth/popup-closed-by-user') {
        console.error("Popup was closed by the user before authentication could complete.");
      }
      
      throw error;
    }
  }

  // Logout
  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    loginWithGoogle,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 