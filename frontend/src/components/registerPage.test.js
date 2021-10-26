import React from 'react';
import ReactDOM from 'react-dom';
import Register from './registerPage';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<registerPage></registerPage>, div)
})