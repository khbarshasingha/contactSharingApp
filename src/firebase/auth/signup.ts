import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../config/firebase";
import { AddUser } from "../user";

const auth = getAuth(app);

export default async function SignUp(password: string, email: string) {
  let result = null;
  let error = null;
  let userRes = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    console.log("resukt checking", result.user)
    if (result) {
      userRes = await AddUser(email);

    }
  } catch (e) {
    error = e;
    console.log("error", e)
  }
  return { result, error, userRes };


}
