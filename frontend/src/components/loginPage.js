import React, { useState } from "react";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitMethod = (e) => {
        e.preventDefault();

        const user = {
            username: {username},
            password: {password}
        }

        console.log({user});
    }

    return (
        <div className = "loginContainer">
            <h1 align = "middle"> Login Form </h1> 
            <form align = "middle" onSubmit = {onSubmitMethod}>
                <label>Username:  </label>
                <input type = "text" placeholder = "username12345" value = {username} onChange = {(event) => setUsername(event.target.value)}></input>
                <br/><br/>
                <label>Password:  </label>
                <input type = "password" value = {password} onChange = {(event) => setPassword(event.target.value)}></input>
                <br/><br/>
                <input type = "submit" value = "Create User"></input>
            </form>
            <br/><br/>
            <div align = "middle">
                <a href = "\register">Register</a>
            </div>
            <br/><br/>
            <div align = "middle">
                <a href = "\forgot">Forgot password</a>
            </div>
            <div align = "middle">
                <a href = "\dashboardlist">Dashboard</a>
            </div>
        </div>
    );
}

export default Login;