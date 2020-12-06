import './AddTodo.css';
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

function AddTodo(props) {
  const [newTodo, setNewTodo] = useState('');
  const todos = props.todos
  const history = useHistory();

  const addTodo = (event) => {
    event.preventDefault();
    const newID = props.id + 1
    props.setID(newID)
    todos.push({id: newID, isDone: false, name: newTodo});
    history.push("/");
  }

  return (
    <main>
      <h2>new to-do</h2>
      <form onSubmit={addTodo}>
        <input
          autoFocus
          value={newTodo}
          onChange={event => setNewTodo(event.target.value)}
          name="name"
          type="text"
          placeholder="new to-do"
          required
        />
        <button
          type="submit"
          className="header-button"
        >
          add to-do
        </button>
      </form>
    </main>
  );
}

export default AddTodo;
