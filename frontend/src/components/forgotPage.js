import React from "react";

function forgot() {
    return (
        <div className = "forgotContainer">
            <h1 align = "middle">Forgot Form</h1>
            <form align = "middle" method = "post">
                <label>Email Address: </label>
                <input name = "email" type = "email" align = "middle" ></input>
                <br/><br/>
                <input type = "submit" value = "enter"></input>
            </form>
        </div>
    )
}

export default forgot;