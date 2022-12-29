// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7vzXTqKDoRC5t7lzQezM1zDGrbuxS-iY",
  authDomain: "liberaleschueler-2974b.firebaseapp.com",
  projectId: "liberaleschueler-2974b",
  storageBucket: "liberaleschueler-2974b.appspot.com",
  messagingSenderId: "2331119645",
  appId: "1:2331119645:web:43bcdca51ff6d61e99f6f4",
  measurementId: "G-GN4S3EWEMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);