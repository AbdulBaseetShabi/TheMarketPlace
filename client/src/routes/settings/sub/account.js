import React from "react";

class Account extends React.Component {
  render() {
    return (
      <div id="account">
        <label
          className="inline-block header-level-one"
          style={{ textAlign: "center" }}
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
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%"}}>
              <label>First Name</label>
              <input
                type="text"
                value="Name"
                disabled="disabled"
                style={{ color: "#fffffe", fontSize: "1.1rem" }}
              />
            </div>
            <div style={{ width: "48%"}}>
              <label>Last Name</label>
              <input
                type="text"
                value="Name"
                disabled="disabled"
                style={{ color: "#fffffe", fontSize: "1.1rem" }}
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%"}}>
              <label>Email</label>
              <input
                type="text"
                value="Name"
                disabled="disabled"
                style={{ color: "#fffffe", fontSize: "1.1rem" }}
              />
            </div>
            <div style={{ width: "48%"}}>
              <label>User Name</label>
              <input
                type="text"
                value="Name"
                disabled="disabled"
                style={{ color: "#fffffe", fontSize: "1.1rem" }}
              />
            </div>
          </div>
          <div style={{ width: "50%"}}>
              <label>School</label>
              <input
                type="text"
                value="Name"
                disabled="disabled"
                style={{ color: "#fffffe", fontSize: "1.1rem" }}
              />
            </div>
        </div>
      </div>
    );
  }
}

export default Account;
