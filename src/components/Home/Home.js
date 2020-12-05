import './Home.css';
import React from "react";
import {Link} from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h2>your minimalist to-do list</h2>
        <p>to-do list goes here</p>
        <p><Link to="/add">add new to-do link goes here</Link></p>
      </main>
    </>
  );
}

export default Home;
