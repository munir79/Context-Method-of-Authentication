import React, { useContext } from 'react';
import { AuthContext } from '../Contex/UserContex';

const Home = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <h2> This is Home</h2>
            {user?.dispalyName}
        </div>
    );
};

export default Home;