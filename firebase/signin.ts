
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./auth";



export default async function signin(email:string, password: string){
    let result= null, error=null;
    try{
        result = await signInWithEmailAndPassword(auth, email, password)
    } catch(e){
        error= e;
    }
    return {result, error};
}