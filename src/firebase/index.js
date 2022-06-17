import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC6eqJscgGGTzeQS2EhjXouMVv7wPPpC_0",
    authDomain: "bitirme-projesi-af63f.firebaseapp.com",
    projectId: "bitirme-projesi-af63f",
    storageBucket: "bitirme-projesi-af63f.appspot.com",
    messagingSenderId: "304145385959",
    appId: "1:304145385959:web:6d0dcdf5b7f03ae9c2d542",
    measurementId: "G-8XR39Y1ZLB"
};
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }