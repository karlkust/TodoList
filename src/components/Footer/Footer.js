const Footer = ({ clearTodos, returnToPrevState }) => {
  return (
    <footer className="d-flex mt-5 justify-content-center">
      <button
        onClick={clearTodos}
        type="button"
        className="btn btn-danger mx-1"
      >
        Очистить
      </button>

      <button
        onClick={returnToPrevState}
        type="button"
        className="btn btn-warning mx-1"
      >
        Отменить
      </button>
    </footer>
  );
};

export default Footer;
