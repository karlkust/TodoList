import TodoList from "../TodoList/TodoList";

const Main = ({ todos }) => {
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default Main;
