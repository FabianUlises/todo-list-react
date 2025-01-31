import React, { Component } from 'react';
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
const TodoList = ({todos, setTodos}) => {
    // Handler function to toggle edit property on todo item using todo id
    const toggleEdit = (todoId) => {
        setTodos((currentTodos) =>
            currentTodos.map((todo) => todo.id === todoId ? {...todo, isEditing: !todo.isEditing} : todo));
    };
    // Helper function to toggle todo state completed value using todo id
    const toggleComplete = (todoId) => {
        // Looping through todos state array & updating completed value based on todo id
        setTodos((currentTodos) => 
            currentTodos.map((todo) => {
                if(todo.id === todoId) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
        );
    // todos.map((todo) => {
      // setTodos(todos.map((todo) => todo.id === todoId ? {...todo, completed: !todo.completed} : todo));
      // if(todo.id === todoId) {
      //   setTodos([...todos, {
          
      //   }]);
      // }
    };
    // Handler function to update todo with new input using todo id
    const updateTodo = (value, todoId) => {
        if(value === '' || /^\s*$/.test(value)) return;
        setTodos((currentTodos) => 
            currentTodos.map((todo) => todo.id ===todoId ? {...todo, task: value, isEditing: !todo.isEditing} : todo));
    };
    // Handler function to delete todos with given todo id
    const deleteTodo = (todoId) => {
        setTodos((currentTodos) =>
            currentTodos.filter((todo) => todo.id !== todoId));
    };
    // Function to map through todos state array and render Todo component for each item
    const displayTodos = todos.sort((a, b) => b.id - a.id).map((todo) => (
        todo.isEditing ? (<EditTodoForm todo={todo} updateTodo={updateTodo} />) :
        (<Todo todo={todo} toggleComplete={toggleComplete} toggleEdit={toggleEdit} deleteTodo={deleteTodo} />)
    ));
    return (
        <ul className='todo-list'>
            {todos.length ? displayTodos : null}
        </ul>
    );
};
export default TodoList;