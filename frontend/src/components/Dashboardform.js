import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Dashboardform(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        var identification = Math.floor(Math.random() * 1000)

        props.onSubmit({
            id: identification,
            text: input
        });

        setInput('');
        console.log(localStorage.getItem("username"))
        const newTask = {
            id: identification,
            text: input,
            username: localStorage.getItem("username"),
            isComplete: false 
        }
        console.log(newTask.username)
        axios.post("/dashboardlist/create-task", newTask)
    };

    const handleSubmit1 = e => {
        e.preventDefault();
        var identification = Math.floor(Math.random() * 1000)

        props.onSubmit({
            id: identification,
            text: input
        });

        setInput('');
        console.log(localStorage.getItem("username"))
        const newTask = {
            id: identification,
            text: input,
            username: localStorage.getItem("username"),
            isComplete: false 
        }
        console.log(newTask.username)
    };

    return (
        <form className="dashboard-form" onSubmit={handleSubmit}>
            {props.edit ? ( 
                <>
            <input 
                type="text" 
                placeholder="Update your task" 
                value={input}
                name="text"
                className='task-input edit'
                onChange={handleChange}
                ref={inputRef}
            />
            <button id="test" onClick={handleSubmit1} className="task-button edit">Update</button>
            </>
            ) :
            (
            <>
            <label htmlFor="new-task">What needs to be done?</label>
            <br />
            <input 
                id="new-task"
                type="text" 
                placeholder="Add a task" 
                value={input}
                name="text"
                className='task-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button data-testid='add-task-button' onClick={handleSubmit} className="task-button">Add task</button>
            </>
            )}
            
        </form>
    );
}

export default Dashboardform;