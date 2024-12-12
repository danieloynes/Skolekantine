import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7jCuzz78e-wCVx1XHqEXx-wBwyEGBdXA",
    authDomain: "skolekantine-67197.firebaseapp.com",
    projectId: "skolekantine-67197",
    storageBucket: "skolekantine-67197.firebasestorage.app",
    messagingSenderId: "836039954873",
    appId: "1:836039954873:web:0eb6eca425e4a36346a668",
    measurementId: "G-5GBNQNNHW3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login function
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "admin.html";
        })
        .catch((error) => {
            document.getElementById('error-message').innerText = error.message;
            console.error("Error logging in: ", error);
        });
});
