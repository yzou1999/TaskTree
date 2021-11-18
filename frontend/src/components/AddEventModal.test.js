import React from 'react';
import ReactDOM from 'react-dom';
import {render,fireEvent} from "@testing-library/react"
import AddEventModal from './AddEventModal';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<AddEventModal></AddEventModal>, div)
})