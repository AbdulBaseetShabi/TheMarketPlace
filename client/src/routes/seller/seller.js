import React from "react";
import AddNewBook from "../seller/sub/new-book";
import Books from "../seller/sub/books";

import "./seller.css";

const ROUTES = [
  {
    name: "Add New Book To Sell",
    route: "anbts",
  },
  {
    name: "Published Books",
    route: "publish",
  },
  {
    name: "Unpublished Books",
    route: "unpublish",
  },
  {
    name: "Sold Books",
    route: "sold",
  }
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
      current_route: "anbts",
    };

    this.Navigate = this.Navigate.bind(this);
  }

  Navigate(route) {
    this.setState({ current_route: route });
  }

  render() {
    let route = null;
    if (this.state.current_route === "reviews") {
      route = <div>Here</div>;
    } else if (this.state.current_route === "anbts") {
      route = <AddNewBook />;
    } else {
      route = <Books filter={this.state.current_route} />;
    }

    return (
      <div id="seller">
        <div id="seller-menu">
          <label
            className="inline-block header-level-two"
            style={{ textAlign: "center" }}
          >
            Seller
          </label>
          <hr style={HR_STYLE} />
          <div>
            {ROUTES.map((route, index) => {
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
        <div id="seller-content">{route}</div>
      </div>
    );
  }
}

export default Seller;
