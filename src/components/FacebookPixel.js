import React, { useEffect } from 'react';

const FacebookPixel = () => {
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
    
    // Replace PIXEL_ID with your actual Facebook Pixel ID once created
    fbq('init', 'PIXEL_ID'); 
    fbq('track', 'PageView');
    
    // Track when someone views the consultation booking page
    if (window.location.href.includes('consultation')) {
      fbq('track', 'ViewContent', {
        content_name: 'Consultation Page',
        content_category: 'Interior Design Services'
      });
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  // Track specific events
  const trackConsultationRequest = () => {
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Consultation Request',
        content_category: 'Interior Design Services'
      });
    }
  };

  const trackProductView = (product) => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: product.name,
        content_category: 'Interior Design Products',
        content_ids: [product.id],
        content_type: 'product',
        value: product.price,
        currency: 'CAD'
      });
    }
  };

  return (
    <>
      {/* Facebook Pixel noscript */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=PIXEL_ID&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
};

// Export the component and the tracking functions
export default FacebookPixel;
export { trackConsultationRequest, trackProductView }; 