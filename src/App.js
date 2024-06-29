import React, { Component, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import EditTodoForm from './components/EditTodoForm';
import TodoList from './components/TodoList';
function App() {
  // State
  const [todos, setTodos] = useState([]);
  // Function to update state with new task
  const addTodo = (todo) => {
    if(todo === '') return;
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
  // Handler function to toggle edit property on todo item using todo id
  const editTodo = (todoId) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => todo.id === todoId ? {...todo, isEditing: !todo.isEditing} : todo));
  };
  // Handler function to delete todos with given todo id
  const deleteTodo = (todoId) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== todoId));
  };
  // Handler function to update todo with new input
  const updateTodo = (value, todoId) => {
    if(value === '') return;
    setTodos((currentTodos) => 
      todos.map((todo) => todo.id ===todoId ? {...todo, task: value, isEditing: !todo.isEditing} : todo));
  };
  // Function to map through todos state array and render Todo component for each item
  const displayTodos = todos.map((todo) => (
    todo.isEditing ? (<EditTodoForm todo={todo} updateTodo={updateTodo} />) :
    (<Todo id={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />)
  ));
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList />
      {/* Only displaying todos if array isnt empty */}
      { todos.length ? displayTodos : null }
    </div>
  );
};

export default App;