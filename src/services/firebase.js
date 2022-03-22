import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWy5FMid26hFKPMWz8ZuNTNIT2RIh5Gtw",
  authDomain: "termos-clone.firebaseapp.com",
  projectId: "termos-clone",
  storageBucket: "termos-clone.appspot.com",
  messagingSenderId: "752096840123",
  appId: "1:752096840123:web:60b2f89e7f704985be5c9e"
};

const app = initializeApp(firebaseConfig);

export default app;
