import "./App.css";
import React from "react";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./global/firebase-config";

import Navigation from "./widget/navigation/navigation";

import Login from "../src/routes/login/login";
import Signup from "../src/routes/signup/signup";
import Market from "../src/routes/market/market";
import Seller from "../src/routes/seller/seller";
import Settings from "../src/routes/settings/settings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_nav: false,
      current_route: "login",
    };
    this.Navigate = this.Navigate.bind(this);
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    this.auth = auth;
  }

  Navigate(route) {
    let show_nav = route !== "login" && route !== "signup";

    this.setState({
      current_route: route,
      show_nav: show_nav,
    });
  }

  render() {
    let route = null;
    let id = sessionStorage.getItem("tmp_user_id");
    
    if (this.state.current_route === "login" && id === null) {
      route = <Login Navigate={this.Navigate} auth={this.auth} />;
    } else if (this.state.current_route === "signup" && id === null) {
      route = <Signup Navigate={this.Navigate} auth={this.auth} />;
    } else if (this.state.current_route === "market" && id !== null) {
      route = <Market />;
    } else if (this.state.current_route === "seller" && id !== null) {
      route = <Seller />;
    } else if (this.state.current_route === "settings"  && id !== null) {
      route = <Settings />;
    } else if (id === null) {
      this.setState({
        current_route: "login",
        show_nav: false,
      }); 
    } else {
      this.setState({
        current_route: "market",
        show_nav: true,
      });
    }

    return (
      <div id="main-app">
        {this.state.show_nav ? (
          <Navigation
            Navigate={this.Navigate}
            CurrentRoute={this.state.current_route}
          />
        ) : null}
        <div
          id="content"
          style={{ width: this.state.show_nav ? "80%" : "100%" }}
        >
          {route}
        </div>
      </div>
    );
  }
}

export default App;
