// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Todos } from './components/Todos';
import { AddTodo } from './components/AddTodo';
import { About } from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  const addTodo = (title, description) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description
    };
    setTodos([...todos, myTodo]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            <Footer />
          </>
        } />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
