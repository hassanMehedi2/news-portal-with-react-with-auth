import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
 const [loading,setLoading]= useState(true);

    // create User 
    const createUser =(email,password)=>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    // logOut 
    const logout= ()=>{
        setLoading(true);
        return signOut(auth);
    }

    // log in user 
    const login = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // monitoring the user 
    useEffect(()=>{
         const unsubscribe= onAuthStateChanged(auth , (currentUser)=>{
            console.log("observing the user",currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return unsubscribe;
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        logout,
        login
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;