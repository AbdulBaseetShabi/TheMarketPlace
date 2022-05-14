import "./modal.css";

function Modal(props) {
  return (
    <div id="modal">
      {props.child ?? (
        <div id="loading">
          <div id="loading-icon"></div>
          <label className="header-level-one" style={{ fontWeight: "bolder" }}>
            Loading
          </label>
        </div>
      )}
    </div>
  );
}

export default Modal;
