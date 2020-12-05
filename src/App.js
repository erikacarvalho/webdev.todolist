import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AddTodo from "./components/AddTodo/AddTodo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import React, {useState} from "react";

function App() {
  const todolist = [
    {id: 1, isDone: false, name: "do the dishes"},
    {id: 2, idDone: false, name: "buy a new charger for smartwatch"}
  ]
  const [todos, setTodos] = useState(todolist);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/add">
          <AddTodo todos={todos}/>
        </Route>
        <Route path="/home">
          <Home todos={todos} setTodos={setTodos}/>
        </Route>
        <Route exact path="/">
          <Home todos={todos} setTodos={setTodos}/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
