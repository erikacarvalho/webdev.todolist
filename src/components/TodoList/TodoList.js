import './TodoList.css';
import React, {useEffect} from "react";

const TodoList = (props) => {
  useEffect(() => {
// TODO: filter what is done and what is not
  }, []);

  const todos = props.todos
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
