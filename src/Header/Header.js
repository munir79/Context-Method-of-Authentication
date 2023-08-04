import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contex/UserContex';

const Header = () => {
    const {user}=useContext(AuthContext);
    console.log('contex:',user);
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/registar'>Registar</Link>
       
          {user?.dispalyName && <p> wellCome {user.dispalyName}</p>}
          
        </div>
    );
};

export default Header;