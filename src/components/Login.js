import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
import { useState } from 'react';

function Login() {
    const [userName, setName] = useState("");
    const [userAge, setAge] = useState(0);
    const [userEmail, setEmail] = useState("");
    //This is a Hook that's going to look through our imported slice to find a matching reducer, and then call it.
    const dispatch = useDispatch();
    //If it seems a bit weird that we're using custom hooks alongside calls to our reducers, there is an explanation!
    //Hooks like setName, setAge or setEmail will just monitor the info entered into the text fields, and this eventually
    //becomes our payload that's fed to the user slice's reducers (login/out). Slices are good for global functionality, but as
    //far as I'm concerned, hooks that call useState() are still king when it comes to just keeping track of text fields
    return (
        <div>
            <p>Name</p>
            <input type="text" name="name" onChange={(event) => setName(event.target.value)}/><br/>
            <p>Age</p>
            <input type='number' name="age" onChange={(event) => setAge(event.target.value)}/><br/>
            <p>Email</p>
            <input type="text" name="email" onChange={(event) => setEmail(event.target.value)}/><br/>
            <button onClick={()=>{
                dispatch(login({name: userName, age: userAge, email: userEmail}));
            }}
            >Login</button>
            <br/>
            <button onClick={()=>{
                dispatch(logout());
            }}>Logout</button>
        </div>
    );
}

export default Login;