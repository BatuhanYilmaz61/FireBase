import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyCl8YoCU-4irOLHTgLLqVgrF2ctRMKnH6c",
    authDomain: "bitirmeproje-4115c.firebaseapp.com",
    projectId: "bitirmeproje-4115c",
    storageBucket: "bitirmeproje-4115c.appspot.com",
    messagingSenderId: "188035030464",
    appId: "1:188035030464:web:c40b8e1d97f076b958fc25",
    measurementId: "G-KFJ3L6QEYH"
};
initializeApp(firebaseConfig);
const app = createApp(App)
app.use(router);
app.mount("#app")