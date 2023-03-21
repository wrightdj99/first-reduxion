import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);
    return (
        <div style={{color: themeColor}}>
            <h1>Profile Page</h1>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    );
}

export default Profile;