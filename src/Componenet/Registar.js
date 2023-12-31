import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contex/UserContex';

const Registar = () => {

const { createUser}=useContext(AuthContext);
console.log(createUser);
const handleRegistar=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log( name,email,password);
    createUser(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user);

    })
    .catch(error=>{
        console.log('error:',error);
    })
}


    return (
        <div>
            <h2> This is Registar</h2>
            <form onSubmit={handleRegistar}>
                <input type="text" name="name" id=""  placeholder='enter your name'/><br />
                <input type="email" name="email" id="" placeholder='enter your email' /><br />
                <input type="password" name="password" id="" placeholder='enter your password' /><br />
                <button type="submit">Registar</button>
                <p>Already Have an Account? <Link to='/login'>Login</Link> </p>
            </form>
        </div>
    );
};

export default Registar;