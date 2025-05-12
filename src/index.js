import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add cache-busting mechanism
if (process.env.NODE_ENV === 'production') {
  // Clear cache on load in production
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }
  
  // Clear localStorage cache
  if (window.localStorage) {
    const buildTimestamp = new Date().getTime();
    const lastBuildTimestamp = localStorage.getItem('buildTimestamp');
    
    if (!lastBuildTimestamp || parseInt(lastBuildTimestamp) < buildTimestamp) {
      localStorage.setItem('buildTimestamp', buildTimestamp);
      if (caches) {
        // Clear all caches
        caches.keys().then(function(names) {
          for (let name of names) caches.delete(name);
        });
      }
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
