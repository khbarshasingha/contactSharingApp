import { db } from "@/config/firebase";
import { collection, addDoc } from "firebase/firestore";
const AddUser = async (email: string) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            company:"",
            email: email,
            link:"",
            name:"",
            phone:"",
            title:""
        });
        console.log("Document written with ID: ", docRef.id);
        console.log("Document written with ID: ", docRef);
        return docRef;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
export default AddUser;
