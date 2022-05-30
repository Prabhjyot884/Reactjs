import {createContext,useContext, useEffect,useState} from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, signOut, 
    onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {setDoc, doc} from 'firebase/firestore'

const AuthContext = createContext();

export function AuthContextProvider({children}) {
const [user, setUser] = useState({});

const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
}

function signup(email, password) {
     createUserWithEmailAndPassword (auth, email, password);
     setDoc(doc(db, 'users', email), {
         yoga: []
     })
}
function logIn(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}
function logOut() {
    return signOut(auth);
};

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log('User', currentUser)
    });
    return () =>{
        unsubscribe();
    };
});
    return (
    <AuthContext.Provider value={{ googleSignIn, signup, logIn,logOut, user}}>
        {children}
    </AuthContext.Provider>

    );
}

export function UserAuth() {
    return useContext(AuthContext);
}