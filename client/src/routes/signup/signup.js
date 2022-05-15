import React from "react";

import "./signup.css";
import logo from "./../../objects/logo_dark.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { makeAPICall } from "../../global/global-function";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_error: false,
      password_error: false,
    };

    this.signUp = this.signUp.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.user = null;
  }

  componentDidMount() {
    this.user = {
      uid: "B6kY5PjHDeduqjdiWHseVsflw4Q2",
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      school: "",
      cardInfo: {
        name: "",
        cardNo: "",
        csv: "",
        month: "",
        year: "",
      },
      address: {
        address: "",
        city: "",
        province: "",
        postalCode: "",
      },
      password: "",
      password_2: "",
    };
  }

  updateForm(event) {
    let key = event.target.name;
    let value = event.target.value.trim();
    this.user[key] = value;
  }

  signUp() {
    console.log(this.user);

    let password_valid =
      this.user.password.length >= 8 &&
      this.user.password.length <= 20 &&
      this.user.password === this.user.password_2;
    let email_valid = /(@mylaurier.ca)$/.test(this.user.email);

    if (password_valid && email_valid) {
      createUserWithEmailAndPassword(
        this.props.auth,
        this.user.email,
        this.user.password
      )
        .then((userCredential) => {
          // Signed in
          this.user.uid = userCredential.user.uid;
          delete this.user.password;
          delete this.user.password_2;

          makeAPICall("addData", "users", this.user, (response) => {
            if (response !== null) {
              alert("User has successfully been created");
              this.props.Navigate("login");
            } else {
              alert("Error Occured: Check Console");
              console.log(response);
            }
          });
        })
        .catch((error) => {
          let err = error.message;
          alert("Error Occured: Check Console");
          console.log(err);
        });
    } else {
      this.setState({
        email_error: !email_valid,
        password_error: !password_valid,
      });
    }
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
                    onChange={this.updateForm}
                  ></input>
                </div>
                <div className="form-input" style={{ width: "49%" }}>
                  <label className="inline-block">Last Name:</label>
                  <input
                    type="email"
                    name="lastname"
                    placeholder="Last Name"
                    autoComplete="off"
                    onChange={this.updateForm}
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
                    onChange={this.updateForm}
                  ></input>
                </div>
                <div className="form-input" style={{ width: "49%" }}>
                  <label className="inline-block">Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (ex. ...@mylaurier.ca)"
                    autoComplete="off"
                    onChange={this.updateForm}
                  ></input>
                  {this.state.email_error ? (
                    <label
                      className="inline-block tiny-text"
                      style={{ color: "#f08080" }}
                    >
                      Ensure that you are entering a laurier email
                    </label>
                  ) : null}
                </div>
              </div>
              <div className="form-input">
                <label className="inline-block">School:</label>
                <input
                  type="text"
                  name="school"
                  placeholder="Wilfrid Laurier University"
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
                {this.state.password_error ? (
                  <label
                    className="inline-block tiny-text"
                    style={{ color: "#f08080" }}
                  >
                    Ensure that the passwords match, and the password is between
                    8 and 20 characters
                  </label>
                ) : null}
              </div>
              <div className="form-input">
                <label className="inline-block">Retype Password:</label>
                <input
                  type="password"
                  name="password_2"
                  placeholder="Password"
                  autoComplete="off"
                  onChange={this.updateForm}
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
