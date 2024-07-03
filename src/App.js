import React, { Component, useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
function App() {
  // Get localstorage todos
  const getLocalStorage = () => {
    // Getting local storage todos
    let items = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    return items;
    // let items = localStorage.getItem('todos');
    // if(items) {
    //   items = JSON.parse(items);
    //   return items;
    // } else {
    //   // If no items returning empty array
    //   return [];
    // }
  };
  // State
  const [todos, setTodos] = useState(getLocalStorage());
  // useEffect
  useEffect(() => {
    // Setting todos to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);
  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      {/* Only displaying todos if array isnt empty */}
      { todos.length ? <TodoList todos={todos} setTodos={setTodos} />  : 'No tasks yet' }
    </div>
  );
};

export default App;