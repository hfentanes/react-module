import { useState } from "react";
import "../styles/TodoList.scss";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function handleText(event) {
    setText(event.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();
    setTodos([...todos, text]);
    setText("");
  }

  function handleReset() {
    setTodos([]);
  }

  function handleRemove(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function Text({ todo, index }) {
    return (
      <li>
        <p>{todo}</p>
        <button onClick={() => handleRemove(index)}>Remove</button>
      </li>
    );
  }

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Your text here..."
          value={text}
          onChange={handleText}
        />
        <button type="submit">Add</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Text key={index} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
}
