# Environment Variable Setup

This project uses environment variables to secure sensitive information such as API keys and Firebase configuration. Follow these steps to set up your environment variables:

## Local Development Setup

1. Create a `.env` file in the root directory of the project
2. Copy the contents from `env.sample` into your new `.env` file
3. Replace the placeholder values with your actual Firebase configuration values:

```
REACT_APP_FIREBASE_API_KEY=AIzaSyAtpihXSYvj7_ahcfU5TIgsbWbHPHA0apU
REACT_APP_FIREBASE_AUTH_DOMAIN=real-estate-app-9c523.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=real-estate-app-9c523
REACT_APP_FIREBASE_STORAGE_BUCKET=real-estate-app-9c523.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=986104607915
REACT_APP_FIREBASE_APP_ID=1:986104607915:web:ceeb3dc9f7f9f55ca673ee
REACT_APP_FIREBASE_MEASUREMENT_ID=G-194QPRN592
```

4. Save the file and restart your development server

## Vercel Deployment Setup

1. Log in to your Vercel dashboard
2. Select your project
3. Go to "Settings" > "Environment Variables"
4. Add each environment variable from your `.env` file as a new entry
5. Click "Save" to apply the changes
6. Redeploy your application to use the new environment variables

## Important Security Notes

- Never commit your `.env` file to version control
- Keep your API keys and other sensitive information private
- If you suspect your keys have been compromised, regenerate them immediately in your Firebase console

## Troubleshooting

If your application isn't connecting to Firebase after setting up environment variables:

1. Make sure all variable names match exactly (REACT_APP_FIREBASE_API_KEY, etc.)
2. Check for any typos in your environment variable values
3. Ensure you've restarted your development server or redeployed your application
4. Verify that your Firebase project is properly configured and active 