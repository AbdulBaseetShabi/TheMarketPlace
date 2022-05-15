import React from "react";
import { makeAPICall } from "../../../global/global-function";
import "../settings.css";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit_mode: false,
      cardInfo: null,
      address: null,
    };
    this.updateForm = this.updateForm.bind(this);
    this.account = null;
  }

  componentDidMount() {
    this.setState({
      cardInfo: this.props.account.cardInfo,
      address: this.props.account.address,
    });
  }

  updateUserCredentials() {
    makeAPICall(
      "updateData",
      "users",
      {
        _id: this.props.account._id,
        cardInfo: this.state.cardInfo,
        address: this.state.address,
      },
      (response) => {
        console.log(response);
        if (response !== null) {
          alert(response);
        } else {
          alert("Error occured: Check Console");
        }

        this.setState({edit_mode: false});
      }
    );
  }

  updateForm(event) {
    let key = event.target.name.split(" ");
    let parent = key[0];
    let child = key[1];
    let value = event.target.value.trim();

    this.setState((prevState, prevProps) => {
      let new_obj = { ...prevState[parent] };
      new_obj[child] = value;
      return {
        [parent]: new_obj,
      };
    });
  }

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
                    name="cardInfo name"
                    value={this.state.cardInfo?.name}
                    style={{ width: "80%", display: "block" }}
                    onChange={this.updateForm}
                    disabled={!this.state.edit_mode}
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <label className="inline-block">Card No:</label>
                  <input
                    type="text"
                    name="cardInfo cardNo"
                    value={this.state.cardInfo?.cardNo}
                    onChange={this.updateForm}
                    style={{ width: "80%", display: "block" }}
                    disabled={!this.state.edit_mode}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    width: "80%",
                    marginTop: "10px",
                  }}
                >
                  <div>
                    <label className="inline-block">CSV: </label>
                    <input
                      type="number"
                      name="cardInfo csv"
                      value={this.state.cardInfo?.csv}
                      onChange={this.updateForm}
                      disabled={!this.state.edit_mode}
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
                      name="cardInfo month"
                      value={this.state.cardInfo?.month}
                      onChange={this.updateForm}
                      disabled={!this.state.edit_mode}
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
                      name="cardInfo year"
                      value={this.state.cardInfo?.year}
                      onChange={this.updateForm}
                      disabled={!this.state.edit_mode}
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
                    name="address address"
                    value={this.state.address?.address}
                    onChange={this.updateForm}
                    disabled={!this.state.edit_mode}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    marginTop: "10px",
                  }}
                >
                  <div>
                    <label className="inline-block">City:</label>
                    <input
                      type="text"
                      style={{
                        width: "80%",
                        display: "block",
                      }}
                      name="address city"
                      value={this.state.address?.city}
                      onChange={this.updateForm}
                      disabled={!this.state.edit_mode}
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
                      name="address province"
                      value={this.state.address?.province}
                      onChange={this.updateForm}
                      disabled={!this.state.edit_mode}
                    />
                  </div>
                  <div>
                    <label className="inline-block">Postal Code:</label>
                    <input
                      type="text"
                      style={{
                        width: "45%",
                        display: "block",
                      }}
                      name="address postalCode"
                      value={this.state.address?.postalCode}
                      onChange={this.updateForm}
                      disabled={!this.state.edit_mode}
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
            <div
              className="button"
              style={{
                backgroundColor: this.state.edit_mode ? "#2CB67D" : "#329FC4",
                fontWeight: "normal",
              }}
              onClick={
                this.state.edit_mode
                  ? () => {
                    this.updateUserCredentials();
                  }
                  : () => {
                      this.setState({ edit_mode: true });
                    }
              }
            >
              {this.state.edit_mode ? "Save" : "Edit"}
            </div>
            {this.state.edit_mode ? (
              <div
                className="button"
                style={{ backgroundColor: "#000000", fontWeight: "normal" }}
                onClick={() => {
                  this.setState({
                    cardInfo: this.props.account.cardInfo,
                    address: this.props.account.address,
                    edit_mode: false,
                  });
                }}
              >
                Cancel
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
