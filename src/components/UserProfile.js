import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { currentUser, logout } = useAuth();

  if (!currentUser) return null;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mr-3">
        <div className="relative">
          <img
            src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.email.split('@')[0]}&background=906c3e&color=fff`}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border-2 border-[#906c3e]"
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-3 h-3 border-2 border-white"></div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="text-sm font-medium">
          {currentUser.displayName || currentUser.email.split('@')[0]}
        </div>
        <button
          onClick={handleLogout}
          className="text-xs text-[#906c3e] hover:underline"
        >
          Sign Out
        </button>
      </div>
    </motion.div>
  );
};

export default UserProfile; 