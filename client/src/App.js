import "./App.css";
import React from "react";

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

    if (this.state.current_route === "login") {
      route = <Login Navigate={this.Navigate} />;
    } else if (this.state.current_route === "signup") {
      route = <Signup Navigate={this.Navigate} />;
    } else if (this.state.current_route === "market") {
      route = <Market />;
    } else if (this.state.current_route === "seller") {
      route = <Seller />;
    } else if (this.state.current_route === "settings") {
      route = <Settings />;
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
