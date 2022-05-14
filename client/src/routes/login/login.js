import React from "react";

import "./login.css";
import logo from "./../../objects/logo_dark.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
  }
  
  logIn() {
    this.props.Navigate("market")
  }

  render() {
    return (
      <div id="login">
        <img src={logo} alt="logo" />
        <div id="login-content">
          <div style={{ width: "75%" }}>
            <label className="inline-block header-level-one">
              Log into your account
            </label>
            <label className="inline-block tiny-text">
              <span style={{ fontWeight: "bolder" }}>NOTE:</span> Your account
              should be associated with your school's email address
            </label>
            <div>
              <div className="form-input">
                <label className="inline-block">Email:</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email (ex. ...@mylaurier.ca)"
                  autocomplete="off"
                ></input>
              </div>
              <div className="form-input">
                <label className="inline-block">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autocomplete="off"
                ></input>
              </div>
            </div>
            <div style={{ margin: "20px 0" }}>
              <div className="button" style={{ backgroundColor: "#2cb67d" }} onClick={this.logIn}>
                Login
              </div>
              <div className="button" style={{ backgroundColor: "#7f5af0" }} onClick={()=>{this.props.Navigate("signup")}}>
                Sign up
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
