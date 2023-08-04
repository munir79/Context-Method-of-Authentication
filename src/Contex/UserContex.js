import React, { createContext, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../Firebase/Firebase.init';
export const AuthContext=createContext();




const UserContex = ({children}) => {
    const auth=getAuth(app);
     const [user,setUser]=useState({dispalyName:'munir1'});

     const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
     }

     const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
     }


  const authinfo={user,createUser,login};


    return (
        <AuthContext.Provider value={authinfo}>
            {children}
             
        </AuthContext.Provider>
    );
};

export default UserContex;