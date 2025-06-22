// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7kKwEgcp3SWwS0v7ex1ZFJk-Q4kMcbek",
  authDomain: "bproductive-app.firebaseapp.com",
  projectId: "bproductive-app",
  storageBucket: "bproductive-app.firebasestorage.app",
  messagingSenderId: "238565008877",
  appId: "1:238565008877:android:604b5efceea61e27c7f3e4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };