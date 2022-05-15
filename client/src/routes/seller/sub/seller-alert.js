import Modal from "../../../widget/modal/modal";
import "../seller.css";

function Alert(props) {
  return (
    <div className="alert">
      <label
        className="inline-block header-level-two"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        Alert
      </label>
      <hr
        style={{
          opacity: "0.2",
          width: "80%",
          borderBottom: "1px solid white",
        }}
      />
      {props.message}
      <hr
        style={{
          opacity: "0.2",
          width: "80%",
          borderBottom: "1px solid white",
        }}
      />
      <div style={{ display: "flex" }}>
        <div
          className="button"
          style={{
            backgroundColor: "#2CB67D",
            color: "#fffffe",
            fontWeight: "normal",
            width: "40%",
          }}
          onClick={() => props.continue()}
        >
          {props.continue_message}
        </div>
        <div
          className="button"
          style={{
            backgroundColor: "#222844",
            color: "#fffffe",
            fontWeight: "normal",
            width: "40%",
          }}
          onClick={() => props.close()}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}

function SellerAlert(props) {
  return (
    <Modal child={<Alert close={props.close} continue={props.continue} message={props.alertMessage} continue_message={props.continue_message}/>} />
  );
}

export default SellerAlert;
