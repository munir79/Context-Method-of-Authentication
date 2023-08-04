import React, { createContext } from 'react';

const UserContex = ({children}) => {
    const AuthContext=createContext();

    const user={dispalyName:'munir'}

  const authinfo={user};


    return (
        <AuthContext.Provider value={authinfo}>
            {children}
             
        </AuthContext.Provider>
    );
};

export default UserContex;