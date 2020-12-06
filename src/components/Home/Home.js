import './Home.css';
import {Link} from "react-router-dom";
import TodoList from "../TodoList/TodoList";
import React from "react";

function Home(props) {
  return (
    <main>
      <h2>your minimalist to-do list</h2>
      <TodoList todos={props.todos} setTodos={props.setTodos}/>
      <p>
        <Link to="/add" className="animated">
          <span>+ NEW TO-DO</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </Link>
      </p>
    </main>
  );
}

export default Home;
