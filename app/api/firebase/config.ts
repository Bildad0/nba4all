import { getAnalytics } from "firebase/analytics";
import {initializeApp} from "firebase/app";

const  appName ="NBA4ALL";

const firebaseConfig={
    apiKey: "AIzaSyCXcbQT1KDDC9c7Z7G5c41vC62STpgfEas",
    authDomain: "websites-3c750.firebaseapp.com",
    databaseURL: "https://websites-3c750-default-rtdb.firebaseio.com",
    projectId: "websites-3c750",
    storageBucket: "websites-3c750.appspot.com",
    messagingSenderId: "453377291811",
    appId: "1:453377291811:web:80689bcf6bf57ffbe0a396",
    measurementId: "G-S623S4WB29"
};

let firebase_app= initializeApp(firebaseConfig, appName);

getAnalytics(firebase_app);

export default firebase_app;