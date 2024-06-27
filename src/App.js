import React, { Component, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;