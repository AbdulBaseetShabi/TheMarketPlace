import React from "react";

import "./signup.css";
import logo from "./../../objects/logo_dark.png";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    this.props.Navigate("login");
  }

  render() {
    return (
      <div id="signup">
        <img src={logo} alt="logo" />
        <div id="signup-content">
          <div style={{ width: "75%" }}>
            <label className="inline-block header-level-one">
              Create your account
            </label>
            <label className="inline-block tiny-text">
              <span style={{ fontWeight: "bolder" }}>NOTE:</span> Your account
              should be associated with your school's email address
            </label>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="form-input" style={{ width: "49%" }}>
                  <label className="inline-block">First Name:</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    autoComplete="off"
                  ></input>
                </div>
                <div className="form-input" style={{ width: "49%" }}>
                  <label className="inline-block">Last Name:</label>
                  <input
                    type="email"
                    name="lastname"
                    placeholder="Last Name"
                    autoComplete="off"
                  ></input>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="form-input" style={{ width: "49%" }}>
                  <label className="inline-block">User Name:</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    autoComplete="off"
                  ></input>
                </div>
                <div className="form-input" style={{ width: "49%" }}>
                  <label className="inline-block">Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (ex. ...@mylaurier.ca)"
                    autoComplete="off"
                  ></input>
                </div>
              </div>
              <div className="form-input">
                <label className="inline-block">School:</label>
                <input
                  type="text"
                  name="password"
                  placeholder="Wilfrid Laurier University"
                  autoComplete="off"
                ></input>
              </div>
              <div className="form-input">
                <label className="inline-block">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                ></input>
              </div>
              <div className="form-input">
                <label className="inline-block">Retype Password:</label>
                <input
                  type="password"
                  name="password_2"
                  placeholder="Password"
                  autoComplete="off"
                ></input>
              </div>
            </div>
            <div style={{ margin: "20px 0" }}>
              <div
                className="button"
                style={{ backgroundColor: "#2cb67d" }}
                onClick={this.signUp}
              >
                Sign up
              </div>
              <div
                className="button"
                style={{ backgroundColor: "#7f5af0" }}
                onClick={() => {
                  this.props.Navigate("login");
                }}
              >
                Go to Login Page
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
