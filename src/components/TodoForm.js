import React, { Component, useState } from 'react';
const TodoForm = (props) => {
    // State
    const [value, setValue] = useState('');
    // Form submit handler
    const handleSubmit = (e) => {
        // Prevent browser default
        e.preventDefault();
        // Using props to add new task to todos array state
        props.addTodo(value);
        // Resetting value state
        setValue('');
    };
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => setValue(e.target.value)} value={value} type='text' placeholder='Enter new task' className='todo-input' required autoFocus maxLength={60} />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
};
export default TodoForm;