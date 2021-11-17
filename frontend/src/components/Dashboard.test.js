import React from 'react';
import ReactDOM from 'react-dom';
import {render,fireEvent} from "@testing-library/react"
import Dashboard from './Dashboard';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard></Dashboard>, div)
})