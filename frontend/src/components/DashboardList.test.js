import React from 'react';
import ReactDOM from 'react-dom';
import DashboardList from './DashboardList';
import {getQueriesForElement} from "@testing-library/dom"

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<DashboardList></DashboardList>, div)
})

test("renders correct content", () => {
    const root = document.createElement("div");
    ReactDOM.render(<DashboardList />, root);

    const {getByText, getByLabelText } = getQueriesForElement(root);
    expect(getByText("Tasks to be completed!")).not.toBeNull();

})

