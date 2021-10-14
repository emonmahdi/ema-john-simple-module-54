import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut   } from "firebase/auth";
import { useEffect } from "react";
import initialAuthentication from "../components/Firebase/firebase.init";

initialAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
      return signInWithPopup(auth, googleProvider)
            
    }

    const logOut = () => {
        signOut(auth).then(() => {
             setUser({})
          }).catch((error) => {
            console.log(error.message)
          });
    }
    // oberve whether user auth state change or not 
    useEffect( () => {
        onAuthStateChanged( auth, (user) => {
            if(user){
                setUser(user)
            }
        });
    }, [])

    return{
        user, 
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;