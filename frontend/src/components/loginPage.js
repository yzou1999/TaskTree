import React from "react";

function login() {
    return (
        <div className = "loginContainer">
            <h1 align = "middle"> Login Form </h1> 
            <form align = "middle" method = "post" action = "/login_form">
                <label>Username:  </label>
                <input name = "user_log" type = "text" placeholder = "username12345"></input>
                <br/><br/>
                <label>Password:  </label>
                <input name = "user_pwd" type = "password"></input>
                <br/><br/>
                <input type = "submit" value = "enter"></input>
            </form>
            <br/><br/>
            <div align = "middle">
                <a href = "\register">Register</a>
            </div>
            <br/><br/>
            <div align = "middle">
                <a href = "\forgot">Forgot password</a>
            </div>
        </div>
    );
}

export default login;