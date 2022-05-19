import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        complited: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const completedTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="container py-5">
      <Header addNewTodo={addNewTodo} />
      <hr />
      <Main
        completedTodo={completedTodo}
        deleteTodo={deleteTodo}
        todos={todos}
      />
      <Footer />
    </div>
  );
}

export default App;
