import React from 'react';
import ReactDOM from 'react-dom';
import Login from './loginPage';
import loginUser from './loginPage';
import signOut from '/loginPage';
import {render,fireEvent} from "@testing-library/react"

it("Login renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Login></Login>, div)
})

it("loginUser renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<loginUser></loginUser>, div)
})

it("signOut renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<signOut></signOut>, div)
})

it("UserProvider renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<UserProvider></UserProvider>, div)
})

it("useUserState renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<useUserState></useUserState>, div)
})

it("useUserDispatch renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<useUserDispatch></useUserDispatch>, div)
})*/