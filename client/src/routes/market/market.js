import React from "react";
import Book from "../market/sub/book";

import "./market.css";
import Modal from "../../widget/modal/modal";
import Purchase from "./sub/purchase";

import { makeAPICall } from "../../global/global-function";

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_page: 0,
      results: null,
      display: null,
      purchase_screen: false,
      book_id: null,
    };
    this.changePage = this.changePage.bind(this);
    this.closePurchaseScreen = this.closePurchaseScreen.bind(this);
    this.purchaseBook = this.purchaseBook.bind(this);
    this.finalizePurchase = this.finalizePurchase.bind(this);
    this.search = this.search.bind(this);
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
    makeAPICall(
      "updateData",
      "books",
      {
        _id: this.state.book_id,
        status: "sold",
        buyerID: sessionStorage.getItem("tmp_user_id"),
      },
      (response) => {
        console.log(response);
        if (response !== null) {
          this.setState((prevState, prevProps) => {
            return {
              results: prevState.results.filter((book) => {
                return book._id !== this.state.book_id;
              }),
              display: prevState.display.filter((book) => {
                return book._id !== this.state.book_id;
              }),
              purchase_screen: false,
            };
          });
          alert(response);
        } else {
          alert("Error Check Console");
        }
      }
    );
  }

  search(event) {
    let value = event.target.value.toLowerCase().trim();
    this.setState((prevState, prevProps) => {
      let books = prevState.results.filter((book) => {
        console.log(book);
        let flag =
          book.isbn.toLowerCase().includes(value) ||
          book.bookName.toLowerCase().includes(value);
        flag =
          flag ||
          book.tags.find((tag) => tag.toLowerCase().includes(value)) !==
            undefined;
        return flag;
      });
      return {
        display: books,
      };
    });
  }

  componentDidMount() {
    makeAPICall("getData", "books", { status: "publish" }, (response) => {
      if (response !== null) {
        this.setState({
          results: response,
          display: response,
        });
      }
    });
  }

  render() {
    let start = this.state.current_page * 10;
    let books =
      this.state.display === null
        ? []
        : this.state.display.slice(start, start + 10);
    let max_pages =
      this.state.display === null
        ? 0
        : Math.ceil(this.state.display.length / 10);
    return (
      <div id="market" className="enter-left-nofowards">
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
        <div id="header">
          <label
            className="inline-block header-level-one"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            The Market Place
          </label>
          <label
            className="inline-block header-level-two"
            style={{ textAlign: "center" }}
          >
            A place just for students
          </label>
          <div id="search">
            <input
              id="search_input"
              type="text"
              placeholder="Enter an ISBN, Text Book Name or Course Code"
              autoComplete="off"
              onChange={this.search}
            />
          </div>
        </div>
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
