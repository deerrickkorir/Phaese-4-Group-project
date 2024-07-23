import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1loHBgkonzhzdG9vqebx-2GFm_oHKWxM",
    authDomain: "game-app-cbf13.firebaseapp.com",
    projectId: "game-app-cbf13",
    storageBucket: "game-app-cbf13.appspot.com",
    messagingSenderId: "187858180005",
    appId: "1:187858180005:web:f81ea2525f84f4900d3a4c",
    measurementId: "G-6KHFYGSRZX"
  };

const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);
export const auth = getAuth(app);
