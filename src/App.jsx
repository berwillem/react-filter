import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <>
          <h1>todo : </h1>
          <p key={todo.id}>{todo.title}</p>
          <button onClick={() => handleDelete(todo.id)}>remove</button>
        </>
      ))}
    </div>
  );
};

export default App;
