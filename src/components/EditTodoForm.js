import React, { Component, useState } from 'react';
const EditTodoForm = ({todo, updateTodo}) => {
    // State
    const [value, setValue] = useState(todo.task ? todo.task : '');
    // Form submit handler
    const handleSubmit = (e) => {
        // Prevent browser default
        e.preventDefault();
        // Using props to add new task to todos array state
        updateTodo(value, todo.id);
        // Resetting value state
        setValue('');
    };
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => setValue(e.target.value)} value={value} type='text' placeholder='Edit task' className='todo-input' />
            <button type='submit' className='todo-btn' aria-label='submit'>Update Task</button>
        </form>
    );
};
export default EditTodoForm;