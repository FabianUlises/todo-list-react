import React, { Component, useState } from 'react';
const TodoForm = ({todos, setTodos}) => {
    // State
    const [value, setValue] = useState('');
    // Helper function to update state with new task
    const addTodo = (todo) => {
        if(todo === '' || /^\s*$/.test(todo)) return;
        // Manually creating todo id
        const todoId = Date.now();
        // Updating state with task data
        setTodos([...todos, {
            id: todoId,
            task: todo,
            completed: false,
            isEditing: false
        }]);
    };
    // Form submit handler
    const handleSubmit = (e) => {
        // Prevent browser default
        e.preventDefault();
        // Using props to add new task to todos array state
        addTodo(value);
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