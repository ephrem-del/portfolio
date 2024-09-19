import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQtJb5LA3bir5Hw-52BtavaIo9XwjC6WE",
  authDomain: "portfolio-d5a6b.firebaseapp.com",
  databaseURL: "https://portfolio-d5a6b-default-rtdb.firebaseio.com",
  projectId: "portfolio-d5a6b",
  storageBucket: "portfolio-d5a6b.appspot.com",
  messagingSenderId: "408412338668",
  appId: "1:408412338668:web:2e392f6d4123b27b16e8c9",
  measurementId: "G-4PK52QCSMY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
