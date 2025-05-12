import React, { useState, useEffect } from 'react';
import { auth, db, googleProvider } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged, signInWithPopup, browserPopupRedirectResolver } from 'firebase/auth';

const FirebaseTest = () => {
  const [status, setStatus] = useState('Testing...');
  const [authStatus, setAuthStatus] = useState('Checking...');
  const [dbStatus, setDbStatus] = useState('Checking...');
  const [googleStatus, setGoogleStatus] = useState('Ready');
  const [detailedDiagnostics, setDetailedDiagnostics] = useState(null);

  useEffect(() => {
    // Test Firebase Authentication
    const authTest = onAuthStateChanged(auth, (user) => {
      if (auth) {
        setAuthStatus('Auth initialized successfully');
      } else {
        setAuthStatus('Auth failed to initialize');
      }
    });

    // Test Firestore
    const testFirestore = async () => {
      try {
        const testCollection = collection(db, 'test');
        await getDocs(testCollection);
        setDbStatus('Firestore connection successful');
      } catch (error) {
        console.error('Firestore test error:', error);
        setDbStatus(`Firestore error: ${error.message}`);
      }
    };

    testFirestore();

    // Check overall status
    setTimeout(() => {
      if (auth && db) {
        setStatus('Firebase initialized successfully');
      } else {
        setStatus('Firebase failed to initialize properly');
      }
    }, 1000);

    return () => authTest();
  }, []);

  // Test Google Authentication
  const testGoogleAuth = async () => {
    setGoogleStatus('Testing...');
    setDetailedDiagnostics(null);
    try {
      // Check provider configuration
      if (googleProvider.providerId === 'google.com') {
        const diagnosticInfo = {
          providerId: googleProvider.providerId,
          customParameters: googleProvider.customParameters,
          scopes: Array.from(googleProvider.scopes),
          authDomain: auth.config.authDomain,
          currentHostname: window.location.hostname,
          isLocalhost: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
        };
        
        setDetailedDiagnostics(diagnosticInfo);
        setGoogleStatus('Google provider configured correctly');
      } else {
        setGoogleStatus('Google provider not configured correctly');
      }
    } catch (error) {
      console.error('Google provider test error:', error);
      setGoogleStatus(`Google provider error: ${error.message}`);
      setDetailedDiagnostics({ error: error.message });
    }
  };

  // Actually test sign-in popup (only use when needed for deep debugging)
  const testGoogleSignInPopup = async () => {
    setGoogleStatus('Testing popup sign-in...');
    try {
      // Don't actually sign in, just open and close the popup
      const result = await signInWithPopup(auth, googleProvider, browserPopupRedirectResolver);
      setGoogleStatus('Google sign-in popup worked!');
      // Sign out immediately
      await auth.signOut();
    } catch (error) {
      console.error('Google sign-in popup test error:', error);
      setGoogleStatus(`Google sign-in popup error: ${error.code} - ${error.message}`);
      setDetailedDiagnostics({ 
        errorCode: error.code,
        errorMessage: error.message,
        errorDetails: error.customData ? error.customData.message : 'No additional details'
      });
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Firebase Configuration Test</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold">Overall Status:</h3>
        <p className={`${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold">Authentication:</h3>
        <p className={`${authStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {authStatus}
        </p>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold">Firestore:</h3>
        <p className={`${dbStatus.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
          {dbStatus}
        </p>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold">Google Provider:</h3>
        <p className={`${googleStatus.includes('correctly') || googleStatus.includes('worked') ? 'text-green-600' : 'text-red-600'}`}>
          {googleStatus}
        </p>
        <div className="flex space-x-2 mt-2">
          <button 
            onClick={testGoogleAuth}
            className="px-4 py-2 bg-[#164A41] text-white rounded hover:bg-[#4D774E] transition-colors"
          >
            Test Google Provider Config
          </button>
          <button 
            onClick={testGoogleSignInPopup}
            className="px-4 py-2 bg-[#C8B568] text-white rounded hover:bg-[#9b8b4f] transition-colors"
          >
            Test Google Sign-In Popup
          </button>
        </div>
      </div>
      
      {detailedDiagnostics && (
        <div className="mb-4 p-4 bg-gray-50 rounded border border-gray-200">
          <h3 className="font-semibold mb-2">Diagnostic Information:</h3>
          <pre className="text-xs overflow-auto p-2 bg-gray-100 rounded">
            {JSON.stringify(detailedDiagnostics, null, 2)}
          </pre>
        </div>
      )}
      
      <div className="text-sm text-gray-600 mt-6">
        <p><strong>Note:</strong> If you continue to experience issues with Google authentication:</p>
        <ol className="list-decimal ml-5 mt-2 space-y-1">
          <li>Verify Google Sign-in is enabled in your Firebase console (Authentication &gt; Sign-in methods)</li>
          <li>Ensure your authorized domains include localhost (for testing) and your production domain</li>
          <li>Check that you've provided the correct Web SDK configuration</li>
          <li>Verify that your Firebase project's OAuth consent screen is properly configured in Google Cloud Console</li>
          <li>Make sure you're using https:// in production (OAuth often requires secure connections)</li>
          <li>Check browser console for more detailed error messages</li>
        </ol>
      </div>
    </div>
  );
};

export default FirebaseTest; 