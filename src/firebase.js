import { initializeApp } from "firebase/app";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0xDI3kuhR8aKZeVo1oySZ_ZYF7d39y-g",
  authDomain: "bright-home-solution.firebaseapp.com",
  projectId: "bright-home-solution",
  storageBucket: "bright-home-solution.firebasestorage.app",
  messagingSenderId: "21369503179",
  appId: "1:21369503179:web:fc490de46af3f75362ca4e",
  measurementId: "G-VFLSNK69G1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);