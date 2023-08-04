import React, { useContext } from 'react';
import { AuthContext } from '../Contex/UserContex';

const Login = () => {
    const {login}=useContext(AuthContext);
    console.log(login);

    const handlLogin =(event)=>{
        event.preventDefault();
        const form=event.target;
       
        const email=form.email.value;
        const password=form.password.value;
        console.log( email,password);
        login(email,password)
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
            <h2> This is Log in</h2>
            <form onSubmit={handlLogin}>
                
                <input type="email" name="email" id="" placeholder='enter your email' /><br />
                <input type="password" name="password" id="" placeholder='enter your password' /><br />
                <button type="submit">Registar</button>
                
            </form>
        </div>
    );
};

export default Login;