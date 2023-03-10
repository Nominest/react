import "../style/todo.css";
import { useState } from "react";

export default function Todo() {
  let item;
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos([...todos, item]);
    console.log(todos);
  };
  const inputChange = (e) => {
    console.log(e.target.value);
    item = e.target.value;
  };
  const deleteTodo = (index) => {
    item = [...todos];
    item.splice(index, 1);
    setTodos(item);
  };
  return (
    <div className="todo">
      <div>
        <h1>To-Do</h1>
        <div>
          <input type="text" onChange={inputChange} />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}{" "}
              <button id="delete" onClick={() => deleteTodo(index)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
