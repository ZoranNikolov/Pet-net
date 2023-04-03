// Pet-net config zoran902@gmail.com

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmVdS9VoajMMMd_f2aO4fYQg2mEnV6648",
  authDomain: "pet-net-a4c29.firebaseapp.com",
  projectId: "pet-net-a4c29",
  storageBucket: "pet-net-a4c29.appspot.com",
  messagingSenderId: "491172108382",
  appId: "1:491172108382:web:ba76bd9a484ff15691bccf",
  measurementId: "G-NYB0B4LPNF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app); 
export const storage = getStorage(app);

// Test movies config - extrastorage.zoran@gmail.com
/*
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCFA__U_nACk9D3TCMEd3a5-OHpVSTU4PY",
	authDomain: "movies-c42ff.firebaseapp.com",
	projectId: "movies-c42ff",
	storageBucket: "movies-c42ff.appspot.com",
	messagingSenderId: "624968355058",
	appId: "1:624968355058:web:81c1252252ba4c3141546b",
	measurementId: "G-K4RKKB20C7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
*/

