import React from "react";
import Book from "./book/book";

import "./market.css";
import GlobalVariables from "../../global/global-variables";

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_page: 0,
      results: null,
    };
  }

  changePage(pace) {
    this.setState((prevState, prevProps) => {
      return {
        current_page: prevState.current_page + pace,
      };
    });
  }

  componentDidMount() {
    this.setState({ results: GlobalVariables.BOOKS });
  }

  render() {
    let start = this.state.current_page * 10;
    let books =
      this.state.results === null
        ? []
        : this.state.results.slice(start, start + 10);
    let max_pages =
      this.state.results === null
        ? 0
        : Math.ceil(this.state.results.length / 10);
    return (
      <div id="market">
        <div id="search">
          <input
            type="text"
            placeholder="Enter an ISBN, Text Book Name or Course Code"
            autoComplete="off"
          />
          <label>Search</label>
        </div>
        <hr
          style={{
            opacity: "0.5",
            width: "80%",
            borderTop: "1px solid black",
          }}
        />
        <div id="search-result">
          {books.map((book, index) => {
            return (
              <div
                key={index + start}
                style={{ width: "18%", margin: "0 1% 10px 1%" }}
              >
                <Book info={book} />
              </div>
            );
          })}
        </div>
        {max_pages > 0 ? (
          <div
            id="page-nav"
          >
            {this.state.current_page > 0 ? (
              <img
                alt="left"
                src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-5.png"
                onClick={() => {
                  this.changePage(-1);
                }}
              />
            ) : null}
            <input
              type="number"
              name="pagenumber"
              value={this.state.current_page + 1}
              min="1"
              max={max_pages}
              readOnly
            />
            {" of "}
            {max_pages}
            {this.state.current_page < max_pages - 1 ? (
              <img
                alt="right"
                src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-5.png"
                onClick={() => {
                  this.changePage(1);
                }}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Market;
