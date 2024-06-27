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
  // Function to map through todos state array and render Todo component for each item
  const displayTodos = todos.map((todo) => (
    <Todo id={todo.id} task={todo.task} />
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