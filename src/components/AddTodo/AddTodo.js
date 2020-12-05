import './AddTodo.css';
import React, {useState} from "react";

function AddTodo(props) {
  const [newTodo, setNewTodo] = useState('');
  const todos = props.todos
  const newID = todos.length + 1

  const addTodo = (event) => {
    event.preventDefault();
    todos.push({id: newID, isDone: false, name: newTodo});
    // TODO: redirect to HOME
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
