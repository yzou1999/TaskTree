import React from 'react';
import ReactDOM from 'react-dom';
import Login from './loginpage';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Login></Login>, div)
})