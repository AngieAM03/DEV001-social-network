import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore, collection, addDoc, doc, onSnapshot} from "firebase/firestore";
import { app } from "./firebase";

const auth = getAuth(app);
export const db = getFirestore(app)
export const createEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password) 
export const singUpEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
export const saveTask = (textPublication) => {
  addDoc(collection (db, 'tasks'), {textPublication})
}
/*export const getTask = () => {
  getDocs (collection (db, 'tasks'))
}*/
export const listenerTask = (callback) => onSnapshot(collection(db, 'tasks'), callback);

