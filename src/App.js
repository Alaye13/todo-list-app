import React, { useState, useRef } from 'react';
import './App.css'; // Make sure to create this file for styling

function App() {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const handleAddTodo = () => {
    const newTodo = todoInputRef.current.value;
    if (newTodo !== '') {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      todoInputRef.current.value = '';
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Todo List</h1>
        <div className="input-container">
          <input type="text" ref={todoInputRef} placeholder="Add a new todo" />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
