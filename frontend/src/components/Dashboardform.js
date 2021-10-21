import React, { useState, useEffect, useRef } from 'react';

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

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');
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
            <button className="task-button edit">Update</button>
            </>
            ) :
            (
            <>
            <input 
                type="text" 
                placeholder="Add a task" 
                value={input}
                name="text"
                className='task-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="task-button">Add task</button>
            </>
            )}
            
        </form>
    );
}

export default Dashboardform;