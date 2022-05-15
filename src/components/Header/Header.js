import Form from "../Form/Form";
import styles from "./index.module.css";

const Header = ({ addNewTodo }) => {
  return (
    <header>
      <Form addNewTodo={addNewTodo} />
    </header>
  );
};

export default Header;
