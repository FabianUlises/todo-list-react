import React, { Component, useState } from 'react';
const TodoForm = () => {
    const [value, setValue] = useState('');
    return(
        <form>
            <input onChange={(e) => setValue(e.target.value)} value={value} type='text' placeholder='Enter new task' className='todo-input' />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
};
export default TodoForm;