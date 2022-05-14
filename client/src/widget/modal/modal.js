import "./modal.css";

function Modal(props) {
  let content = props.content;
  return (
    <div id="modal">
      {content === undefined || content === null ? (
        <div id="loading">
          <div id="loading-icon"></div>
          <label
            className="header-level-one"
            style={{ fontWeight: "bolder" }}
          >
            Loading
          </label>
        </div>
      ) : (
        { content }
      )}
    </div>
  );
}

export default Modal;
