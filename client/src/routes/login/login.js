import React from "react";

import "./login.css";
import logo from "./../../objects/logo_dark.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { makeAPICall } from "../../global/global-function";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
    this.logIn = this.logIn.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.credentials = null;
  }

  logIn() {
    this.setState({ loading: true });
    setTimeout(() => {
      signInWithEmailAndPassword(
        this.props.auth,
        this.credentials.email,
        this.credentials.password
      )
        .then((userCredential) => {
          // Signed in
          sessionStorage.setItem("tmp_user_id", userCredential.user.uid);
          makeAPICall(
            "getData",
            "users",
            { uid: userCredential.user.uid },
            (response) => {
              if (response !== null && response.length > 0) {
                console.log(response);
                sessionStorage.setItem(
                  "tmp_user_username",
                  response[0].username
                );
              }
              this.setState({ navigating: true });
              this.props.Navigate("market");
            }
          );
        })
        .catch((error) => {
          let err = error.message;
          this.setState({ error: true, loading: false });
          console.log(err);
        });
    }, 1500);
  }

  updateForm(event) {
    let key = event.target.name;
    let value = event.target.value.trim();
    this.credentials[key] = value;
  }

  componentDidMount() {
    this.credentials = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div id="login">
        <img src={logo} alt="logo" />
        <div id="login-content" className="enter-left">
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
                  autoComplete="off"
                  onChange={this.updateForm}
                ></input>
              </div>
              <div className="form-input">
                <label className="inline-block">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  onChange={this.updateForm}
                ></input>
              </div>
              {this.state.error ? (
                <label
                  className="inline-block tiny-text"
                  style={{ color: "#f08080" }}
                >
                  Credential Invalid! Ensure that you are entering a laurier
                  email and a valid password
                </label>
              ) : null}
            </div>
            <div style={{ margin: "20px 0" }}>
              <div
                className="button"
                style={{ backgroundColor: "#2cb67d" }}
                onClick={this.logIn}
              >
                {this.state.loading ? (
                  <div className="loading-icon-button"></div>
                ) : (
                  "Login"
                )}
              </div>
              <div
                className="button"
                style={{ backgroundColor: "#7f5af0" }}
                onClick={
                  this.state.loading
                    ? () => {}
                    : () => {
                        this.props.Navigate("signup");
                      }
                }
              >
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
