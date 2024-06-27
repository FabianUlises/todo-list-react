import React, { Component } from 'react';
const Todo = (props) => {
    return (
        <li key={props.todo.id}>
            <p onClick={() => props.toggleComplete(props.todo.id)}>{props.todo.task}</p>
            <span onClick={() => props.editTodo(props.todo.id)}>✏️</span>
            <span onClick={() => props.deleteTodo(props.todo.id)}>🗑️</span>
        </li>
    );
};
export default Todo;