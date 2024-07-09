import app from "@/config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth(app);

export default async function(email:string, password:string){
let result;
let error;
try{
     result = await signInWithEmailAndPassword(auth, email,password)
}
catch(e){
    error=e;
}
return {result, error}
}