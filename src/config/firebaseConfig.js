// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDytWxFOC_FU0hxRtqHZ7SdL8cudk4eX34",
  authDomain: "social-app-production-3b2e2.firebaseapp.com",
  projectId: "social-app-production-3b2e2",
  storageBucket: "social-app-production-3b2e2.firebasestorage.app",
  messagingSenderId: "571594822437",
  appId: "1:571594822437:web:aa5bcac782ec68283ec0cc",
  measurementId: "G-G9SZC8HX8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
