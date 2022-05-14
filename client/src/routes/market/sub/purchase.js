import "../market.css";

function Purchase(props) {
  return (
    <div id="purchase">
      <label
        className="inline-block header-level-two"
        style={{ textAlign: "center" }}
      >
        Purchase Alert
      </label>
      <hr
        style={{
          opacity: "0.2",
          width: "80%",
          borderBottom: "1px solid white",
        }}
      />
      <label className="inline-block" style={{ textAlign: "center" }}>
        <span style={{ fontWeight: "bold" }}>NOTE: </span>The information
        provided in{" "}
        <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
          Settings {">"} Payment Information
        </span>{" "}
        would be used to purchase this item. Please ensure it is up to date,
        unless the transaction would fail.
      </label>
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
          onClick={() => props.purchaseBook()}
        >
          Purchase Item
        </div>
        <div
          className="button"
          style={{
            backgroundColor: "#222844",
            color: "#fffffe",
            fontWeight: "normal",
            width: "40%",
          }}
          onClick={()=> props.close()}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}

export default Purchase;
