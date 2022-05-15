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

  return (
    <div className="container py-5">
      <Header addNewTodo={addNewTodo} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
