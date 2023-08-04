import React, { createContext, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../Firebase/Firebase.init';
export const AuthContext=createContext();




const UserContex = ({children}) => {
    const auth=getAuth(app);
     const [user,setUser]=useState({dispalyName:'munir1'});

     const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
     }


  const authinfo={user,createUser};


    return (
        <AuthContext.Provider value={authinfo}>
            {children}
             
        </AuthContext.Provider>
    );
};

export default UserContex;