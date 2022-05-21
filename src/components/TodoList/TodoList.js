import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, deleteTodo, completedTodo }) => {
  return (
    <ul className="list-group">
      {todos.length ? (
        todos.map((todo, i) => {
          return (
            <TodoItem
              key={todo.id}
              completedTodo={completedTodo}
              deleteTodo={deleteTodo}
              index={i}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          );
        })
      ) : (
        <p>Список пуст...</p>
      )}
    </ul>
  );
};

export default TodoList;
