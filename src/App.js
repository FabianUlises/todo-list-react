import React, { Component, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
function App() {
  // State
  const [todos, setTodos] = useState([]);
  // Helper function to update state with new task
  const addTodo = (todo) => {
    if(todo === '' || /^\s*$/.test(todo)) return;
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
      {/* Only displaying todos if array isnt empty */}
      { todos.length ? <TodoList todos={todos} setTodos={setTodos} />  : 'No tasks yet' }
    </div>
  );
};

export default App;