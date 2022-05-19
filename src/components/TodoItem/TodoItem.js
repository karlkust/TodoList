const TodoItem = ({
  id,
  title,
  completed,
  index,
  deleteTodo,
  completedTodo,
}) => {
  const deleteHanler = () => {
    deleteTodo(id);
  };

  const completedHandler = () => {
    completedTodo(id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={completed ? "text-muted" : ""}>
        {index + 1}. {title}
      </span>
      <div>
        <button
          onClick={completedHandler}
          type="button"
          className={`btn btn-${completed ? "warning" : "success"} mx-1`}
        >
          {completed ? "Повторить" : "Выполнено!"}
        </button>
        <button
          onClick={deleteHanler}
          type="button"
          className="btn btn-danger mx-1"
        >
          Удалить
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
