import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../config/firebase";

const auth = getAuth(app);

export default async function SignUp(password: string, email: string) {
  let result = null;
  let error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
    console.log("error",e)
  }
  return { result, error };


}
