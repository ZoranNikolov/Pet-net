import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAmVdS9VoajMMMd_f2aO4fYQg2mEnV6648",
	authDomain: "pet-net-a4c29.firebaseapp.com",
	projectId: "pet-net-a4c29",
	storageBucket: "pet-net-a4c29.appspot.com",
	messagingSenderId: "491172108382",
	appId: "1:491172108382:web:ba76bd9a484ff15691bccf",
	measurementId: "G-NYB0B4LPNF",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
