import React from 'react';
import '../pages/Login.css'
import LoginBottom from './LoginBottom';
import LoginForm from './LoginForm';


const Login = () =>{

    return(

        <div className="Login_page">
            <LoginForm />
            <LoginBottom/>   
        </div>
    )
};

export default Login