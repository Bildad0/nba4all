import { createUserWithEmailAndPassword} from "firebase/auth";
import auth from "./auth";

export default async function signup(email:string, password:string){
    let result = null,
    error= null;
    try{
        result = await createUserWithEmailAndPassword(auth, email, password);
    }catch (e){
        error=e;
    }
    return {result, error};
}