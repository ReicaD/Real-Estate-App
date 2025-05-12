import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import gsap from 'gsap';

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const modalRef = useRef();
  
  const { signup, login, loginWithGoogle } = useAuth();

  // GSAP animations
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Animate header gradient
      gsap.fromTo(
        '.auth-header',
        { backgroundPosition: '0% 50%' },
        {
          backgroundPosition: '100% 50%',
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: 'none'
        }
      );
      
      // Animate form elements
      gsap.fromTo(
        '.form-element',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: 'power2.out',
          delay: 0.2
        }
      );
    }
  }, [isOpen, isSignUp]);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
    
    // Reset form animations when toggling between sign in and sign up
    if (modalRef.current) {
      gsap.fromTo(
        '.form-element',
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.3,
          ease: 'power2.out'
        }
      );
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (isSignUp && passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setLoading(true);
      
      if (isSignUp) {
        await signup(emailRef.current.value, passwordRef.current.value);
      } else {
        await login(emailRef.current.value, passwordRef.current.value);
      }
      
      onClose();
    } catch (err) {
      setError('Failed to ' + (isSignUp ? 'sign up' : 'log in') + ': ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    try {
      setLoading(true);
      setError(''); // Clear any previous errors
      await loginWithGoogle();
      onClose();
    } catch (err) {
      console.error("Google login error:", err);
      
      // More user-friendly error messages
      if (err.code === 'auth/configuration-not-found') {
        setError('Authentication service is currently unavailable. Please try again later or use email login instead.');
        console.error('Firebase OAuth configuration issue - please check your Firebase console settings.');
      } else if (err.code === 'auth/popup-closed-by-user') {
        setError('Sign-in was cancelled. Please try again.');
      } else if (err.code === 'auth/popup-blocked') {
        setError('Sign-in popup was blocked by your browser. Please allow popups for this site and try again.');
      } else if (err.code === 'auth/cancelled-popup-request') {
        setError('Sign-in process was interrupted. Please try again.');
      } else if (err.code === 'auth/unauthorized-domain') {
        setError('Authentication failed. This domain is not authorized for sign-in (contact site administrator).');
      } else {
        setError('Failed to sign in with Google. Please try email login instead or try again later.');
      }
    } finally {
      setLoading(false);
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring',
        damping: 20,
        stiffness: 300 
      } 
    },
    exit: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95,
      transition: { duration: 0.2 } 
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              ref={modalRef}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden z-10"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div 
                className="auth-header p-8 border-b bg-gradient-to-r from-[#164A41] via-[#4D774E] to-[#C8B568] bg-size-200 text-white relative overflow-hidden"
              >
                {/* Nature-inspired subtle background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <pattern id="leafPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M20 0C14 8 10 16 10 20s4 8 10 8 10-4 10-8-4-12-10-20z" fill="white"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#leafPattern)" />
                    </svg>
                  </div>
                </div>
                
                {/* Nature-inspired decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current">
                    <path d="M44.3,-58.4C59.9,-49.8,76.5,-39.5,82.7,-24.6C88.9,-9.7,84.7,9.7,76.7,26.6C68.7,43.5,56.9,57.8,42.3,66.8C27.7,75.8,10.1,79.6,-5.9,77.1C-21.9,74.7,-36.4,66,-48.4,54.7C-60.4,43.4,-70,29.5,-74.1,13.6C-78.2,-2.3,-76.9,-20.3,-67.9,-32.8C-58.9,-45.3,-42.2,-52.3,-27.4,-61.2C-12.7,-70.1,0.2,-80.8,11.9,-77.6C23.6,-74.3,28.7,-67.1,44.3,-58.4Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-28 h-28 opacity-20 transform -translate-x-6 translate-y-8">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current">
                    <path d="M46.5,-64.5C59.3,-55.7,68.2,-40.8,74.2,-24.4C80.2,-8,83.1,9.9,76.5,23.4C70,36.8,54,45.8,38.5,53.2C23,60.7,8,66.5,-7.2,67.2C-22.5,67.9,-38.1,63.5,-51.1,54.2C-64.1,44.9,-74.5,30.6,-77.2,14.8C-79.9,-1,-74.8,-18.3,-65.3,-31.2C-55.7,-44.1,-41.7,-52.5,-28.1,-61.1C-14.5,-69.7,-1.2,-78.4,10.7,-76.8C22.7,-75.1,33.7,-73.3,46.5,-64.5Z" transform="translate(100 100)" />
                  </svg>
                </div>
                
                {/* Plant and leaf icons */}
                <div className="absolute top-12 left-44 w-14 h-14 opacity-30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-white fill-current">
                    <path d="M12.5 21q-3.05 0-5.175-2.075T5.25 14q0-1.475.538-2.812T7.2 8.65q.2.125.463.375t.562.6q.3.35.613.813t.587.887q-.275 1.175.025 2.313t1.075 2.062q1.35 1.35 3.15 1.35t3.15-1.35q.775-.775 1.075-1.9t.025-2.25q1.35-1.375 2.15-3.125t.8-3.8q1.1 1.325 1.713 2.95t.612 3.325q0 2.925-2.125 5T12.5 21Zm.75-6.5q.325.325.325.713t-.325.737q-.175.15-.375.225t-.425.05q-.425-.025-.713-.313q-.15-.15-.212-.325t-.088-.4q0-.2.088-.375t.212-.35q.2-.175.425-.225t.45-.05q.2 0 .375.075t.263.238ZM12 9.5q-1.75 0-3.25-1.1t-2.15-2.9q1.25.125 2.388.525t2.187 1.025q1.05.625 1.887 1.5t1.338 1.95q-.75-.5-1.512-.75T12 9.5Z"/>
                  </svg>
                </div>
                <div className="absolute top-4 right-14 w-18 h-18 opacity-30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-white fill-current">
                    <path d="M12 22q-5 0-8.5-3.5T0 10q0-1.55.5-3.025T2 4q4 7 11.5 8.5Q9.5 11.5 11 3q3.5 5 5.25 7t3.25 3q.5-.5 1-1.5t1-2q1 1 1.75 2.5t.75 3.25q0 4.25-3 7.125T12 22Z"/>
                  </svg>
                </div>
                <div className="absolute bottom-5 right-8 w-16 h-16 opacity-30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-white fill-current">
                    <path d="M6 21q-2.5 0-4.25-1.75T0 15q0-1.55.75-2.888t2.05-2.087q1.3-.75 2.8-1.063T8.7 8.8q1.1-.05 2.3.125t2.4.325Q13.25 8 13.5 6.662T14 4q1.75 2 2.875 4.5T18 13q0 3.3-2.35 5.65T10 21q-1.05 0-2-.387T6 19.35V21Zm12-5q1.05 0 1.775-.725T20.5 13.5q0-.8-.575-1.375t-1.4-.575q.725 2-2.125 3.45-.975 1.5-1.55 1.75 1.075-.225 1.875-.325T18 16Z"/>
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold mb-2 relative z-10">
                  {isSignUp ? 'Create Account' : 'Welcome Back'}
                </h2>
                <p className="text-white text-opacity-80 relative z-10">
                  {isSignUp 
                    ? 'Sign up to access exclusive interior design services' 
                    : 'Sign in to your 3ller¿ account'}
                </p>
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 focus:outline-none z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8">
                {error && (
                  <motion.div 
                    className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6 form-element"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <p>{error}</p>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit}>
                  {isSignUp && (
                    <div className="mb-5 form-element">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        ref={nameRef}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  )}
                  
                  <div className="mb-5 form-element">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D774E] focus:border-transparent transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div className="mb-5 form-element">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Password
                    </label>
                    <input
                      ref={passwordRef}
                      type="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  
                  {isSignUp && (
                    <div className="mb-6 form-element">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Confirm Password
                      </label>
                      <input
                        ref={passwordConfirmRef}
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#164A41] via-[#4D774E] to-[#C8B568] text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 mb-5 font-medium form-element"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : isSignUp ? 'Create Account' : 'Sign In'} 
                  </motion.button>
                </form>
                
                <div className="relative flex items-center justify-center my-6 form-element">
                  <div className="border-t border-gray-300 absolute w-full"></div>
                  <div className="bg-white px-4 relative text-sm text-gray-500">or continue with</div>
                </div>
                
                <motion.button
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full border border-gray-300 flex items-center justify-center py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 mb-6 form-element"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="#FFC107" />
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="#FF3D00" />
                    <path d="M3.117,7.29l3.258,2.414c0.97-2.54,3.454-4.388,6.392-4.388c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814 C17.503,2.988,15.139,2,12.545,2C8.558,2,5.099,4.152,3.117,7.29z" fill="#4CAF50" />
                    <path d="M12.545,22c2.518,0,4.839-0.834,6.701-2.231l-3.106-2.629c-0.965,0.749-2.238,1.147-3.595,1.147 c-2.789,0-5.156-1.639-6.264-3.939l-3.304,2.536C4.857,19.72,8.373,22,12.545,22z" fill="#1976D2" />
                  </svg>
                  Sign {isSignUp ? 'up' : 'in'} with Google
                </motion.button>
                
                <div className="text-center text-sm form-element">
                  <span className="text-gray-600">
                    {isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
                  </span>
                  <motion.button
                    onClick={toggleMode}
                    className="text-[#4D774E] font-medium hover:underline focus:outline-none"
                    whileHover={{ scale: 1.05 }}
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal; 