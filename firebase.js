// firebase.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // or a similar variable name
  authDomain: "bproductive-app.firebaseapp.com",
  projectId: "bproductive-app",
  storageBucket: "bproductive-app.appspot.com",
  messagingSenderId: "238565008877",
  appId: "1:238565008877:web:d1420c41bb20072dc7f3e4",
  measurementId: "G-8MLTPG4XCL"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };
