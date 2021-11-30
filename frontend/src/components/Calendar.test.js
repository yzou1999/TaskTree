import React from 'react';
import ReactDOM from 'react-dom';
import {render,fireEvent,getByTestId} from "@testing-library/react"
import Calendar from './Calendar';
import { mount } from 'enzyme';
it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Calendar></Calendar>, div)
})
test("renders correct content", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Calendar />, root);
    expect(root.querySelector("button").textContent).toBe("Add Event");
})
test("Click", () => {
    const {container} = render(<Calendar />);
    const button = getByTestId(container, 'add-event-button');
    fireEvent.click(button);
});
