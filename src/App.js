import React, { Component, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
function App() {
  // State
  const [todos, setTodos] = useState([]);
  // Function to update state with new task
  const addTodo = (todo) => {
    // Manually creating todo id
    const todoId = Math.floor(Math.random() * 9999);
    // Updating state
    setTodos([...todos], {

    });
  };
  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;