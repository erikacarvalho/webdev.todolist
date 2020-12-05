import './AddTodo.css';
import React from "react";

function AddTodo() {
  return (
    <>
      <main>
        <h2>new to-do</h2>
        <form>
          <input
            type="text"
            name="name"
            value="new to-do"
          />
          <button
            type="submit"
            className="header-button"
          >
            add to-do
          </button>
        </form>
      </main>
    </>
  );
}

export default AddTodo;
