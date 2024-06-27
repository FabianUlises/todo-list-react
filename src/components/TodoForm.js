import React, { Component, useState } from 'react';
const TodoForm = () => {
    // State
    const [value, setValue] = useState('');
    // Form submit handler
    const handleSubmit = (e) => {
        // Prevent browser default
        e.preventDefault();
    };
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => setValue(e.target.value)} value={value} type='text' placeholder='Enter new task' className='todo-input' />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
};
export default TodoForm;