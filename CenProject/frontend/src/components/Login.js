import { useEffect } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app'

function TestupdateUser() {
    axios.post('http://localhost:8000/createUser', {
        userID: "4kk4",
        name: "Muneeeeeb",
        email: "bruh@mail"
    })
    .then(response =>{
        console.log('lego');
    })
    .catch(error =>{
        console.log('aww man')
    })
}

function Login() {
    return (
        <div>
            <h1> Login Page </h1>
            <button className="submitButton" onClick= {TestupdateUser}> Login </button>
        </div>
    );
}

export default Login
