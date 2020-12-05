import './Home.css';
import {Link} from "react-router-dom";
import TodoList from "../TodoList/TodoList";
import React from "react";

function Home(props) {
  return (
    <main>
      <h2>your minimalist to-do list</h2>
      <TodoList todos={props.todos} setTodos={props.setTodos}/>
      <p><Link to="/add">add new to-do link goes here</Link></p>
    </main>
  );
}

export default Home;
