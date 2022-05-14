import React from "react";

import './settings.css';
const ROUTES = [
  {
    name: "Account Details",
    route: "account",
  },
  {
    name: "Payment Information",
    route: "payment",
  }
];

const HR_STYLE = {
  opacity: "0.5",
  width: "80%",
  borderTop: "1px solid black",
};

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_route: "account",
    };

    this.Navigate = this.Navigate.bind(this);
  }

  Navigate(route) {
    this.setState({ current_route: route });
  }
  render() {
    let route = null;
    if (this.state.current_route === "account") {
      route = <div>Account</div>;
    } else if (this.state.current_route === "payment") {
      route = <div>Card info</div>;
    }

    return (
      <div id="settings">
        <div id="settings-menu">
          <label
            className="inline-block header-level-two"
            style={{ textAlign: "center" }}
          >
            Settings
          </label>
          <hr style={HR_STYLE} />
          <div>
            {ROUTES.map((route, index) => {
              let class_name =
                route.route === this.state.current_route
                  ? "inline-block settings-route current-settings-route"
                  : "inline-block settings-route";
              return (
                <label
                  key={index}
                  className={class_name}
                  onClick={() => this.Navigate(route.route)}
                >
                  {route.name}
                </label>
              );
            })}
          </div>
        </div>
        <div id="settings-content">{route}</div>
      </div>
    );
  }
}

export default Settings;
