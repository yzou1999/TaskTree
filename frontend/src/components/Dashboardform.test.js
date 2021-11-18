import React from 'react';
import ReactDOM from 'react-dom';
import Dashboardform from './Dashboardform';
import {render,fireEvent, getByTestId} from "@testing-library/react"

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Dashboardform></Dashboardform>, div)
})

test("renders correct content", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Dashboardform />, root);

    expect(root.querySelector("button").textContent).toBe("Add task");
    expect(root.querySelector("input").textContent).toBe("");
    expect(root.querySelector("label").textContent).toBe("What needs to be done?");


})




test("Click", () => {
    const {container} = render(<Dashboardform />);

    const button = getByTestId(container, 'add-task-button');
    fireEvent.click(button);
});