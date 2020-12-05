import './App.css';
import AddTodo from "./components/AddTodo/AddTodo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import React from "react";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <AddTodo/>
      <Footer/>
    </>
  );
}

export default App;
