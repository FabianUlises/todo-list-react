import React, { Component } from 'react';
const Todo = (props) => {
    return (
        <li key={props.todoId}>
            {props.task}
            <span>✏️</span>
            <span>🗑️</span>
        </li>
    );
};
export default Todo;