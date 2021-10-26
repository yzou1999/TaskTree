import React from 'react';
import ReactDOM from 'react-dom';
import Dashboardform from './Dashboardform';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Dashboardform></Dashboardform>, div)
})