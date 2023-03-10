// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_IgPg8iPFyNi2tSCdT8GWbqBWaXQkGAk",
  authDomain: "passing-data-52359.firebaseapp.com",
  databaseURL: "https://passing-data-52359-default-rtdb.firebaseio.com",
  projectId: "passing-data-52359",
  storageBucket: "passing-data-52359.appspot.com",
  messagingSenderId: "28595079761",
  appId: "1:28595079761:web:1849b3d2e4529ad5040670",
  measurementId: "G-SZYJYJLVDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;