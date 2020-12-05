import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AddTodo from "./components/AddTodo/AddTodo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/add">
            <AddTodo/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/" component={Home}>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
