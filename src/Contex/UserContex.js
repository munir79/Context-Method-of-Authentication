import React, { createContext } from 'react';
export const AuthContext=createContext();

const UserContex = ({children}) => {


     const user={dispalyName:'munir'}

  const authinfo={user};


    return (
        <AuthContext.Provider value={authinfo}>
            {children}
             
        </AuthContext.Provider>
    );
};

export default UserContex;