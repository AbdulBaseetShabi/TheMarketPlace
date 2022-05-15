import "../settings.css";

function Account(props) {
  return (
    <div id="account">
      <label
        className="inline-block header-level-one"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        Account Details
      </label>
      <hr
        style={{
          opacity: "0.2",
          width: "80%",
          borderBottom: "1px solid white",
        }}
      />
      <div id="account-content">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "48%" }}>
            <label>First Name</label>
            <input
              type="text"
              value={props.account?.firstname}
              disabled="disabled"
              style={{ color: "#fffffe" }}
            />
          </div>
          <div style={{ width: "48%" }}>
            <label>Last Name</label>
            <input
              type="text"
              value={props.account?.lastname}
              disabled="disabled"
              style={{ color: "#fffffe" }}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
          <div style={{ width: "48%" }}>
            <label>Email</label>
            <input
              type="text"
              value={props.account?.email}
              disabled="disabled"
              style={{ color: "#fffffe" }}
            />
          </div>
          <div style={{ width: "48%" }}>
            <label>User Name</label>
            <input
              type="text"
              value={props.account?.username}
              disabled="disabled"
              style={{ color: "#fffffe" }}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
          <div style={{ width: "48%" }}>
            <label>School</label>
            <input
              type="text"
              value={props.account?.school}
              disabled="disabled"
              style={{ color: "#fffffe" }}
            />
          </div>
          <div style={{ width: "48%" }}>
            <label>Phone</label>
            <input
              type="text"
              value={props.account?.phone}
              disabled="disabled"
              style={{ color: "#fffffe" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
