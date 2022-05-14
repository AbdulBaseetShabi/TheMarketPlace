import React from "react";

import "./seller.css";

const ROUTES = [
  {
    name: "Reviews",
    route: "reviews",
    is_sub: false,
  },
  {
    name: "Add New Book To Sell",
    route: "anbts",
    is_sub: false,
  },
  {
    name: "Books",
    route: "books",
    is_sub: false,
  },
  {
    name: "Published",
    route: "published",
    is_sub: true,
  },
  {
    name: "Unpublished",
    route: "unpublished",
    is_sub: true,
  },
  {
    name: "Sold",
    route: "sold",
    is_sub: true,
  },
];

const HR_STYLE = {
  opacity: "0.5",
  width: "80%",
  borderTop: "1px solid black",
};

class Seller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_route: "reviews",
    };

    this.Navigate = this.Navigate.bind(this);
  }

  Navigate(route) {
    this.setState({ current_route: route });
  }

  render() {
    let main_routes = [];
    let sub_routes = [];
    for (const route of ROUTES) {
      if (route.is_sub) {
        sub_routes.push(route);
      } else {
        main_routes.push(route);
      }
    }

    return (
      <div id="seller">
        <div id="seller-menu">
          <label
            className="inline-block header-level-two"
            style={{ textAlign: "center" }}
          >
            Menu
          </label>
          <hr style={HR_STYLE} />
          <div>
            {main_routes.map((route, index) => {
              let class_name =
                route.route === this.state.current_route
                  ? "inline-block seller-route current-seller-route"
                  : "inline-block seller-route";
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
            <div id="seller-submenu">
              {sub_routes.map((route, index) => {
                let class_name =
                  route.route === this.state.current_route
                    ? "inline-block seller-route current-seller-route"
                    : "inline-block seller-route";
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
        </div>
        <div id="seller-content"></div>
      </div>
    );
  }
}

export default Seller;
