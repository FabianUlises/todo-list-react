import React, { Component } from 'react';
const Todo = ({todo, toggleComplete, toggleEdit, deleteTodo}) => {
    return (
        <li key={todo.id}>
            <p onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
            <span onClick={() => toggleEdit(todo.id)}>✏️</span>
            <span onClick={() => deleteTodo(todo.id)}>🗑️</span>
        </li>
    );
};
export default Todo;