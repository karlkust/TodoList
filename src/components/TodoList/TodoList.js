import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            title={todo.title}
            complited={todo.complited}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
