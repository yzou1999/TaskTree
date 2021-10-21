import React from "react";

function Register() {
    return (
        <div className = "registerContainer">
            <h1 align = "middle">Register form</h1>
            <form align = "middle" method = "post" action = "/register_form">
                <label>Email:  </label>
                <input name = "email" type = "email"></input>
                <br/><br/>
                <label>Username:  </label>
                <input name = "user_reg" type = "text"></input>
                <br/><br/>
                <label>Password:  </label>
                <input name = "pwd_reg" type = "password"></input>
                <br/><br/>
                <input type = "submit" value = "enter"></input>
            </form>
            <a align = "middle" href = "/">Login in Now</a>
        </div>
    );
}

export default Register;