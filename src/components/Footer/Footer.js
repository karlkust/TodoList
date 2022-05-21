const Footer = ({ clearTodos }) => {
  return (
    <footer className="d-flex mt-5 justify-content-center">
      <button
        onClick={clearTodos}
        type="button"
        className="btn btn-danger mx-1"
      >
        Очистить
      </button>
    </footer>
  );
};

export default Footer;
