import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAQZx0HuSu9pH1xfm4WOD848i1xZ0lN_S4",
  authDomain: "uploadimg-b7aef.firebaseapp.com",
  projectId: "uploadimg-b7aef",
  storageBucket: "uploadimg-b7aef.appspot.com",
  messagingSenderId: "915672999801",
  appId: "1:915672999801:web:ae2721d13e6a64c2b271a8",
});
// Firebase storage reference
const storage = getStorage(firebaseConfig);
export default storage;
