import React, { Component, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
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
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;