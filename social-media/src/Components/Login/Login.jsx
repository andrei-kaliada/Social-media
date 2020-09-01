import React from 'react'
import LoginForm from './LoginForm';


export default function Login() {
    let submit = (value) => {
        console.log(value);
    }
    return (
        <div>
            <h1>Login</h1>
           <LoginForm onSubmit={submit}/>
        </div>
    )
}
