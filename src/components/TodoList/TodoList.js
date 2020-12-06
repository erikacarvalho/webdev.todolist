import './TodoList.css';
import React from "react";

const TodoList = (props) => {
  const todos = props.todos
  const setTodos = props.setTodos
  const cmp = ( a, b ) => {
    return a.isDone < b.isDone ? -1 : 1
  }
  const deleteItem = (id) => {
    let result = todos.filter((item) => item.id !== id)
    setTodos(result);
  }
  const markItem = (id) => {
    let result = todos.map((item) =>{
      if (item.id === id) {
        item.isDone = !item.isDone
      }
      return item
    })
    setTodos(result);
  }

  if (todos.length === 0) {
    return 'there are no to-dos yet';
  }

  return (
    <ul>
      {todos
        ? todos.sort(cmp).map((todo) => (
          <li key={todo.id} className="todo-list-item">
              <input onClick={() => markItem(todo.id)} type="checkbox" defaultChecked={todo.isDone} name=""/>
            {todo.name}
            {todo.isDone
              ? <button onClick={() => deleteItem(todo.id)}>remove to-do</button>
              : ""
            }
          </li>
        ))
        : "loading..."}
    </ul>
  );
};

export default TodoList;
