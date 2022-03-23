import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWy5FMid26hFKPMWz8ZuNTNIT2RIh5Gtw",
  authDomain: "termos-clone.firebaseapp.com",
  projectId: "termos-clone",
  storageBucket: "termos-clone.appspot.com",
  messagingSenderId: "752096840123",
  appId: "1:752096840123:web:60b2f89e7f704985be5c9e"
};

export const app = initializeApp(firebaseConfig);

export const loadFBase = () => {
  try {
    // let app = firebase.app();
    let features = [
      'auth', 
      'database', 
      'firestore',
      'functions',
      'messaging', 
      'storage', 
      'analytics', 
      'remoteConfig',
      'performance',
    ].filter(feature => typeof app[feature] === 'function');
    return `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    return 'Error loading the Firebase SDK, check the console.';
  }
}
