import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "sonner";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID ,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId:import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth =getAuth();

export const register= async (email:string,password:string)=>{

 try{
  const {user} = await createUserWithEmailAndPassword(auth,email,password)
  return user

 }catch (error){
toast((error as Error).message)
 }
 
  
}

 export const login = async ( email:string, password:string)=>{
 try {
  const {user}= await signInWithEmailAndPassword(auth,email,password)
 return user
 }catch (error) {
  toast((error as Error).message)

 }

 }

 export const logout = async ()=>{
  try {
    await signOut(auth)
  return true
  }catch (error) {
   toast((error as Error).message)
 
  }
 
  }




export default app