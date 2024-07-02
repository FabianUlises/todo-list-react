import React, { Component } from 'react';
const Todo = ({todo, toggleComplete, editTodo, deleteTodo}) => {
    return (
        <li key={todo.id}>
            <p onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
            <span onClick={() => editTodo(todo.id)}>✏️</span>
            <span onClick={() => deleteTodo(todo.id)}>🗑️</span>
        </li>
    );
};
export default Todo;