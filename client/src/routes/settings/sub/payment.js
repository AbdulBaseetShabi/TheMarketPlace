import React from "react";
import "../settings.css";

class Payment extends React.Component {
  render() {
    return (
      <div id="payment">
        <label
          className="inline-block header-level-one"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Payment Information
        </label>
        <hr
          style={{
            opacity: "0.2",
            width: "80%",
            borderBottom: "1px solid white",
          }}
        />
        <div id="payment-content" style={{ border: "none" }}>
          <div id="card">
            <div>
              <label className="inline-block header-level-two">
                Credit Card Information
              </label>
              <div className="section">
                <div>
                  <label className="inline-block">Name: </label>
                  <input
                    type="text"
                    style={{ width: "80%", display: "block" }}
                  />
                </div>
                <div>
                  <label className="inline-block">Card No:</label>
                  <input
                    type="text"
                    style={{ width: "80%", display: "block" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    width: "80%",
                  }}
                >
                  <div>
                    <label className="inline-block">CSV: </label>
                    <input
                      type="number"
                      style={{
                        width: "30%",
                        display: "block",
                        border: "1px solid #cccccc",
                        height: "30px",
                        borderRadius: "2px",
                        boxSizing: "border-box",
                        outline: 0,
                      }}
                    />
                  </div>
                  <div>
                    <label className="inline-block">Month: </label>
                    <input
                      type="number"
                      min="1"
                      max="12"
                      style={{
                        width: "80%",
                        display: "block",
                        border: "1px solid #cccccc",
                        height: "30px",
                        borderRadius: "2px",
                        boxSizing: "border-box",
                        outline: 0,
                      }}
                    />
                  </div>
                  <div>
                    <label className="inline-block">Year: </label>
                    <input
                      type="number"
                      style={{
                        width: "50%",
                        display: "block",
                        border: "1px solid #cccccc",
                        height: "30px",
                        borderRadius: "2px",
                        boxSizing: "border-box",
                        outline: 0,
                      }}
                      min="2022"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr
            style={{
              opacity: "0.2",
              width: "80%",
              margin: "20px auto",
              borderBottom: "1px solid white",
            }}
          />
          <div id="address">
            <label className="inline-block header-level-two">
              Billing and Shipping Address
            </label>
            <div className="section">
              <div>
                <div>
                  <label className="inline-block">Address:</label>
                  <input
                    type="text"
                    style={{ width: "80%", display: "block" }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "start" }}>
                  <div>
                    <label className="inline-block">City:</label>
                    <input
                      type="text"
                      style={{
                        width: "80%",
                        display: "block",
                      }}
                    />
                  </div>
                  <div>
                    <label className="inline-block">Province:</label>
                    <input
                      type="text"
                      style={{
                        width: "30%",
                        display: "block",
                      }}
                    />
                  </div>
                  <div>
                    <label className="inline-block">Postal Code:</label>
                    <input
                      type="text"
                      style={{
                        width: "30%",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr
            style={{
              opacity: "0.2",
              width: "80%",
              margin: "20px auto",
              borderBottom: "1px solid white",
            }}
          />
          <div>
            <div className="button" style={{backgroundColor: "#329FC4"}}>Edit</div>
            <div className="button" style={{backgroundColor: "#000000"}}>Cancel</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
