import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    // const [name, setName ]= useState("")

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const userDetails=(name,photoUrl)=>{
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photoUrl
        })
        .then(() => setUser((user) => (
          { ...user, displayName: name, photoURL: photoUrl })))
       .catch((error) => { console.log(error) });
      }

  
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }
    
    const createUser = (email, password ) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,loggedUser =>{
            setUser(loggedUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        userDetails,
        setLoading,
        createUser,
        signInUser,
        logOut, 
        signInWithGoogle,
        signInWithGithub,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;