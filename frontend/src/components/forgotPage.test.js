import React from 'react';
import ReactDOM from 'react-dom';
import Forgot from './forgotPage';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Forgot></Forgot>, div)
})