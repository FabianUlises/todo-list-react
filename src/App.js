import React, { Component, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
function App() {
  // State
  const [todos, setTodos] = useState([]);
  // Function to update state with new task
  const addTodo = (todo) => {
    if(todo === '') return
    // Manually creating todo id
    const todoId = Math.floor(Math.random() * 9999);
    // Updating state with task data
    setTodos([...todos, {
      id: todoId,
      task: todo,
      completed: false,
      isEditing: false
    }]);
  };
  // Update state completed value
  const toggleComplete = (todoId) => {
    // Looping through todos state array & updating completed value based on todo id
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if(todo.id === todoId) {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
      })
    });
    // todos.map((todo) => {
      // setTodos(todos.map((todo) => todo.id === todoId ? {...todo, completed: !todo.completed} : todo));
      // if(todo.id === todoId) {
      //   setTodos([...todos, {
          
      //   }]);
      // }
    // setTodos((currentTodos) => {
    //   return currentTodos.map((todo) => {
    //     if(todo.id === todoId) {
    //       return { ...todo, completed: !todo.completed }
    //     }
    //     return todo;
    //   })
    // });
  };
  // Handler function to delete todos with given todo id
  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  // Function to map through todos state array and render Todo component for each item
  const displayTodos = todos.map((todo) => (
    <Todo id={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
  ));
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      {/* Only displaying todos if array isnt empty */}
      { todos.length ? displayTodos : null }
    </div>
  );
}

export default App;