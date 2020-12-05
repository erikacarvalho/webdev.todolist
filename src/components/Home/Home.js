import './Home.css';
import {React} from "react";
import {Link} from "react-router-dom";
import TodoList from "../TodoList/TodoList";

function Home() {
  return (
    <main>
      <h2>your minimalist to-do list</h2>
      <TodoList/>
      <p><Link to="/add">add new to-do link goes here</Link></p>
    </main>
  );
}

export default Home;
