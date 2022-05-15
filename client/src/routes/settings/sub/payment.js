import React from "react";

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
        <div id="payment-content">
        <div id="card">
          <div>
            <label className="inline-block header-level-two">
              Credit Card Information
            </label>
            <div>
              <label className="inline-block" style={{ textAlign: "center" }}>
                Name
              </label>
              <input
                type="text"
                style={{ width: "60%", margin: "0 auto", display: "block" }}
              />
            </div>
            <div>
              <label className="inline-block" style={{ textAlign: "center" }}>
                Card No
              </label>
              <input
                type="text"
                style={{ width: "60%", margin: "0 auto", display: "block" }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <label className="inline-block" style={{ textAlign: "center" }}>
                  Month
                </label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  style={{
                    width: "80%",
                    margin: "0 auto",
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
                <label className="inline-block" style={{ textAlign: "center" }}>
                  Year
                </label>
                <input
                  type="number"
                  style={{
                    width: "50%",
                    margin: "0 auto",
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
              <div>
                <label className="inline-block" style={{ textAlign: "center" }}>
                  CSV
                </label>
                <input
                  type="number"
                  style={{
                    width: "30%",
                    margin: "0 auto",
                    display: "block",
                    border: "1px solid #cccccc",
                    height: "30px",
                    borderRadius: "2px",
                    boxSizing: "border-box",
                    outline: 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="address">
          <div>
            <label className="inline-block header-level-two">
              Billing and Shipping Address
            </label>
            <div>
              <label className="inline-block" style={{ textAlign: "center" }}>
                Address
              </label>
              <input
                type="text"
                style={{ width: "60%", margin: "0 auto", display: "block" }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <label className="inline-block" style={{ textAlign: "center" }}>
                  City
                </label>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "block",
                  }}
                />
              </div>
              <div>
                <label className="inline-block" style={{ textAlign: "center" }}>
                Province
                </label>
                <input
                  type="text"
                  style={{
                    width: "30%",
                    margin: "0 auto",
                    display: "block",
                  }}
                />
              </div>
              <div>
                <label className="inline-block" style={{ textAlign: "center" }}>
                  Postal Code
                </label>
                <input
                  type="text"
                  style={{
                    width: "30%",
                    margin: "0 auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    );
  }
}

export default Payment;
