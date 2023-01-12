import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {
  getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc,
} from 'firebase/firestore';
import { app } from './firebase';

const auth = getAuth(app);
export const db = getFirestore(app);
// eslint-disable-next-line max-len
export const createEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const singInEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const saveUsers = (nickname) => {
  addDoc(collection(db, 'nickName'), { nickname });
};
export const saveTask = (textPublication) => {
  addDoc(collection(db, 'tasks'), { textPublication });
};
export const listenerUsers = (callback) => onSnapshot(collection(db, 'nickName'), callback);
export const listenerTask = (callback) => onSnapshot(collection(db, 'tasks'), callback);

export const deletePublication = (id) => deleteDoc(doc(db, 'tasks', id));
