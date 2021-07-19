import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
export const FirebaseContext = createContext(null);



export const AuthContext = createContext(null);



export default function Context  ({children})  {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true)
    const [isUserSignedOut, setIsUserSignOut] = useState(false)
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          setUser(user)
          {
            !user && setIsUserSignOut(true)
          }
        });
        setUserLoading(false)
      });
    

    return(
        <AuthContext.Provider value={{user, setUser, userLoading, isUserSignedOut}}>
            {children}
        </AuthContext.Provider>
    )
}
