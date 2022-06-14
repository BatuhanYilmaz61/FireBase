<template>
<nav>
  <router-link to="/">Home</router-link>
  <br>
  <router-link to="/feed">feed</router-link>
  <br>
  <router-link to="/sign-in">login</router-link>
  <button @click="handleSignOut" v-if="isLoggedIn"> çıkış</button>
</nav>
<router-view />
</template>

<script>
import { onMounted,ref } from 'vue'
import { getAuth,onAuthStateChanged,signOut } from '@firebase/auth'
const isLoggedIn=ref(false)
let auth;
onMounted(()=>{
auth=getAuth();
onAuthStateChanged(auth,(user)=>{
  if(user){
    isLoggedIn.value=true;
  }else {
    isLoggedIn.value=false;
  }
})
});
const handleSignOut=()=>{
  signOut(auth).then(()=>{
    router.push("/")
  });
}

export default {
  
  components:{

     
  }
 
}
</script>
<style>
router-link{
    text-decoration: none;
}


</style>
