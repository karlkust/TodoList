import { useState } from "react";

const Form = ({ addNewTodo }) => {
  const [title, setTitle] = useState("");

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input
          onChange={changeHandler}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Введите текст..."
          value={title}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

export default Form;