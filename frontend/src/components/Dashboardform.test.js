import React from 'react';
import ReactDOM from 'react-dom';
import Dashboardform from './Dashboardform';
import {render,fireEvent} from "@testing-library/react"

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Dashboardform></Dashboardform>, div)
})

test("renders correct content", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Dashboardform />, root);

    expect(root.querySelector("button").textContent).toBe("Add task");
    expect(root.querySelector("input").textContent).toBe("");


})

test("allows users to add tasks to their list", () => {
    const {getByText, getBylabelText} = render(<Dashboardform />);

    const input = getByText("What needs to be done?");
    const button = getByText("Add task");
    fireEvent.change(input, {target: {value: "Do Dishes"}});
    fireEvent.click(button);

    getByText("Do Dishes");
});