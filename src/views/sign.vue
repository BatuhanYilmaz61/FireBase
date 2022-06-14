<template>
    <h1> Sign in to an Account</h1>
    <p> <input type="text" placeholder="Email" v-model="email"></p>
    <p> <input type="password" placeholder="password" v-model="password"></p>
    <p v-if="errMsg">{{errMsg}}</p>
    <p> <button @click="register">submit</button></p>
    <p> <button @click="SignInWithGoogle"> SignInWithGoogle </button></p>
</template>
<script setup>
import{ref} from "vue";
import{getAuth,signInWithEmailAndPassword}from'firebase/auth'
import { useRouter } from "vue-router";
const email=ref("");
const password=ref("");
const errMsg=ref("");
const router=useRouter();
const register=()=>{
    signInWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((data)=>{
        console.log("giriş");
        router.push('/feed');
    })
    .catch((error)=>{
        console.log(error.code);
        switch(error.code){
            case "auth/invalid-email":
            errMsg.value="Invalid email";
            break
            case "auth/user-not-found":
            errMsg.value="no account with that email was found";
            break
            case "auth/wrong-password":
            errMsg.value="Incorrect password";
            break
            default:
                errMsg.value="Email or password was incorrect"
                break;
        }
        alert(error.message);
    })
}
function SignInWithGoogle() {
}
</script>
<style>
</style>