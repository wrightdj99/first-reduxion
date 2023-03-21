import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
function Login() {
    //This is a Hook that's going to look through our imported slice to find a matching reducer, and then call it.
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>{
                dispatch(login({name: "Dan", age: 24, email: "wright.hinsdale99@hotmail.com"}));
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