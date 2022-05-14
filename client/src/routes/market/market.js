import React from "react";
import Book from "../market/sub/book";

import "./market.css";
import GlobalVariables from "../../global/global-variables";
import Modal from "../../widget/modal/modal";
import Purchase from "./sub/purchase";

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_page: 0,
      results: null,
      purchase_screen: false,
      book_id: null,
    };
    this.changePage = this.changePage.bind(this);
    this.closePurchaseScreen = this.closePurchaseScreen.bind(this);
    this.purchaseBook = this.purchaseBook.bind(this);
    this.finalizePurchase = this.finalizePurchase.bind(this);
  }

  changePage(pace) {
    this.setState((prevState, prevProps) => {
      return {
        current_page: prevState.current_page + pace,
      };
    });
  }

  closePurchaseScreen() {
    this.setState({ purchase_screen: false, book_id: null });
  }

  purchaseBook(bookID) {
    this.setState({ purchase_screen: true, book_id: bookID });
  }

  finalizePurchase() {
    alert(this.state.book_id);
  }

  componentDidMount() {
    this.setState({
      results: GlobalVariables.BOOKS.filter((book) => {
        return book.status === "publish";
      }),
    });
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
        {this.state.purchase_screen ? (
          <Modal
            child={
              <Purchase
                purchaseBook={this.finalizePurchase}
                close={this.closePurchaseScreen}
              />
            }
          />
        ) : null}
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
            opacity: "0.2",
            width: "80%",
            borderBottom: "1px solid white",
          }}
        />
        <div id="search-result">
          {books.map((book, index) => {
            return (
              <div
                key={index + start}
                style={{ width: "18%", margin: "0 1% 10px 1%" }}
              >
                <Book info={book} purchase={this.purchaseBook} />
              </div>
            );
          })}
        </div>
        {max_pages > 0 ? (
          <div id="page-nav">
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
