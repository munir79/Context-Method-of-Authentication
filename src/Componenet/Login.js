import React from 'react';

const Login = () => {

    const handlLogin =(event)=>{
        event.preventDefault();
        const form=event.target;
       
        const email=form.email.value;
        const password=form.password.value;
        console.log( email,password);
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