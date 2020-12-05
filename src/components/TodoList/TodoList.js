import './TodoList.css';
import React, {useEffect, useState} from "react";

const todolist = [
  {id: 1, isDone: false, name: "do the dishes"},
  {id: 2, idDone: false, name: "buy a new charger for smartwatch"}
]

const TodoList = () => {
  const [todos, setTodos] = useState(todolist);
  useEffect(() => {
// TODO: filter what is done and what is not
  }, []);

  if (!todos) {
    return 'loading...';
  }

  if (todos.length === 0) {
    return 'there are no to-dos yet';
  }

  return (
    <ul>
      {todos
        ? todos.map((todo) => (
          <li key={todo.id} className="todo-list-item">
            {todo.name}
          </li>
        ))
        : "loading..."}
    </ul>
  );
};

export default TodoList;
