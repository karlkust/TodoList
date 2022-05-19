import TodoList from "../TodoList/TodoList";

const Main = ({ todos, deleteTodo, completedTodo }) => {
  return (
    <div>
      <TodoList
        completedTodo={completedTodo}
        deleteTodo={deleteTodo}
        todos={todos}
      />
    </div>
  );
};

export default Main;
