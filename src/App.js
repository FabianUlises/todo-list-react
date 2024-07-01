import React, { Component, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
function App() {
  // State
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      {/* Only displaying todos if array isnt empty */}
      { todos.length ? <TodoList todos={todos} setTodos={setTodos} />  : 'No tasks yet' }
    </div>
  );
};

export default App;