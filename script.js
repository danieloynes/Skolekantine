import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, where } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7jCuzz78e-wCVx1XHqEXx-wBwyEGBdXA",
    authDomain: "skolekantine-67197.firebaseapp.com",
    projectId: "skolekantine-67197",
    storageBucket: "skolekantine-67197.appspot.com",
    messagingSenderId: "836039954873",
    appId: "1:836039954873:web:0eb6eca425e4a36346a668",
    measurementId: "G-5GBNQNNHW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Logout function
document.getElementById('logout').addEventListener('click', (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
        window.location.href = "login.html"; // Redirect to login page
    }).catch((error) => {
        console.error("Error logging out: ", error);
    });
});

// Add item to menu with image upload
document.getElementById('menu-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const menuItem = document.getElementById('menu-item').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemCategory = document.getElementById('item-category').value;
    const itemImage = document.getElementById('item-image').files[0];

    let imageUrl = '';
    if (itemImage) {
        const storageRef = ref(storage, `images/${itemImage.name}`);
        await uploadBytes(storageRef, itemImage);
        imageUrl = await getDownloadURL(storageRef);
    }

    await addDoc(collection(db, "menu"), {
        item: menuItem,
        price: itemPrice,
        category: itemCategory,
        imageUrl: imageUrl
    });
    loadMatMenu();
});

// Load menu for Mat
async function loadMatMenu() {
    const menuDiv = document.getElementById('current-menu');
    menuDiv.innerHTML = '';
    const q = query(collection(db, "menu"), where("category", "==", "mat"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const item = doc.data().item;
        const price = doc.data().price;
        menuDiv.innerHTML += `<p>${item} - ${price} kr</p>`;
    });
}

// Remove item from menu
window.removeItem = async function(itemId) {
    try {
        await deleteDoc(doc(db, "menu", itemId));
        loadMatMenu(); // Reload menu after deletion
    } catch (error) {
        console.error("Error removing item: ", error);
    }
};

// Load menu on startup
loadMatMenu();

// Check if user is logged in
auth.onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }
});