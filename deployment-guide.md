# 3ller¿ Interiors Ontario - Deployment & Marketing Guide

## Domain & Hosting Setup

### 1. Register Domain
- Purchase `3llerInteriorsontario.com` through [Namecheap](https://www.namecheap.com) or [GoDaddy](https://www.godaddy.com)
- Approximate cost: $12-15/year
- Add domain privacy protection to hide personal information

### 2. Deploy to Firebase Hosting
Since you're already using Firebase for authentication:

```bash
# Install Firebase CLI if you haven't already
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase Hosting
firebase init hosting

# When prompted:
# - Select your existing Firebase project
# - Set public directory to "build"
# - Configure as single-page app
# - Don't overwrite index.html

# Build your React app
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

### 3. Connect Custom Domain
1. In Firebase console, go to Hosting → Add custom domain
2. Enter your domain `3llerInteriorsontario.com`
3. Verify domain ownership (usually via DNS records)
4. Set up the provided DNS records at your domain registrar:
   - A record for root domain
   - CNAME record for www subdomain

## Visitor Retargeting Setup

### 1. Facebook Pixel for Instagram Retargeting
1. Create a Business Manager account at [business.facebook.com](https://business.facebook.com)
2. Navigate to Events Manager and create a new pixel
3. Add this code to your project:

```jsx
// src/components/FacebookPixel.js
import React, { useEffect } from 'react';

export default function FacebookPixel() {
  useEffect(() => {
    // Facebook Pixel Base Code
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID'); // Replace with your pixel ID
    fbq('track', 'PageView');
  }, []);

  return null;
}
```

4. Add this component to your `App.js`:
```jsx
import FacebookPixel from './components/FacebookPixel';

function App() {
  return (
    <>
      <FacebookPixel />
      {/* ... rest of your app */}
    </>
  );
}
```

### 2. Google Analytics & Tag Manager
1. Create a Google Analytics 4 property
2. Set up Google Tag Manager account
3. Add the GTM code to your app:

```jsx
// src/components/GoogleTagManager.js
import React, { useEffect } from 'react';

export default function GoogleTagManager() {
  useEffect(() => {
    // Google Tag Manager code
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX'); // Replace with your GTM ID
  }, []);

  return (
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
    </noscript>
  );
}
```

4. Add the component to your `App.js` alongside FacebookPixel

### 3. Create Instagram Ad Campaign for Retargeting

1. In Facebook Ads Manager:
   - Create a custom audience based on website visitors
   - Create a campaign with the objective "Conversions"
   - Target people who visited your website in the last 30 days
   - Create compelling ads showcasing your interior design services
   - Set a daily budget (start with $10-20/day)
   - Focus ad delivery on Instagram

## Consultation Booking Optimization

### 1. Add Lead Capture Popup
Implement a popup that appears after 30 seconds on site with a special offer:

```jsx
// src/components/LeadCapturePopup.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadCapturePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would save email to your database
    // You could use Firebase Firestore
    setSubmitted(true);
    // Track conversion in Facebook
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && !submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold mb-2">Get 15% Off Your First Consultation</h3>
            <p className="mb-4">Sign up now to receive a special discount on your first design consultation!</p>
            
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-2 mb-4 border rounded"
                required
              />
              <button 
                type="submit"
                className="w-full bg-[#164A41] text-white py-2 rounded hover:bg-[#4D774E]"
              >
                Get My Discount
              </button>
            </form>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### 2. Implement Firebase Analytics Events

```jsx
// src/firebase.js (add to existing file)
import { getAnalytics, logEvent } from "firebase/analytics";

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Track consultation page views
export function trackConsultationView() {
  logEvent(analytics, 'consultation_page_view');
}

// Track consultation bookings
export function trackConsultationBooking(service) {
  logEvent(analytics, 'consultation_booked', {
    service_type: service
  });
}

export { analytics };
```

## Additional Marketing Tools

1. **Mailchimp Integration**: Connect your lead form to Mailchimp for email marketing
2. **Hotjar**: Install for heatmaps and visitor recordings to optimize your site
3. **SEO Optimization**: Add relevant meta tags and schema markup for local interior design business

## Regular Maintenance 

1. Review analytics weekly to see which traffic sources convert best
2. A/B test different consultation CTAs and pricing
3. Update portfolio and client testimonials monthly
4. Run seasonal promotions aligned with home renovation cycles 