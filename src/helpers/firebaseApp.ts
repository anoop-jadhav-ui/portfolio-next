import { initializeApp } from "@firebase/app";
import { getAnalytics, Analytics } from "@firebase/analytics";

const config = {
  apiKey: process.env.NEXT_PUBLIC_APP_FIREBASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_APP_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_APP_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_APP_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_APP_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_APP_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(config);

let analytics: Analytics | undefined = undefined;

if (process.env.NODE_ENV === "production")
  analytics = getAnalytics(firebaseApp);

export { analytics };
export default firebaseApp;
