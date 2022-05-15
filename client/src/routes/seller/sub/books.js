import React from "react";
import "../seller.css";

import { makeAPICall } from "../../../global/global-function";
import SellerAlert from "./seller-alert";

const ALERT_MESSAGE = (
  <label className="inline-block" style={{ textAlign: "center" }}>
    Are you sure would be want to change the status of this book?
  </label>
);

function BookCard(props) {
  let book = props.info;
  let color =
    book.status === "publish"
      ? "#329FC4"
      : book.status === "unpublish"
      ? "#F08080"
      : "#008000";
  return (
    <div
      className="book-card"
      style={{
        borderLeft: "5px solid " + color,
      }}
    >
      <label className="inline-block">Name: {book.bookName}</label>
      <label className="inline-block">Tags: {book.tags.join(", ")}</label>
      <label className="inline-block">Price: ${book.price}</label>
      <div>
        <hr
          style={{
            opacity: "0.2",
            width: "80%",
            borderBottom: "1px solid white",
          }}
        />
        <div
          className="button"
          style={{
            backgroundColor:
              book.status === "publish"
                ? "#F08080"
                : book.status === "unpublish"
                ? "#329FC4"
                : "#232946",
            width: "25%",
            fontWeight: "normal",
            padding: "5px 50px",
          }}
          onClick={() => props.changeBookStatus()}
        >
          {book.status === "publish"
            ? "Unpublish"
            : book.status === "unpublish"
            ? "Publish"
            : "Congratulations "}
          {book.status === "sold" ? <span>&#10024;</span> : null}
        </div>
        {book.status === "unpublish" ? (
          <div
            className="button"
            style={{
              width: "25%",
              fontWeight: "normal",
              padding: "5px 50px",
            }}
            onClick={() => props.delete()}
          >
            Delete
            {book.status === "sold" ? <span>&#10024;</span> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      modal: false,
    };
    this.changeBookStatus = this.changeBookStatus.bind(this);
    this.details = null;
  }

  changeBookStatus() {
    makeAPICall(
      "updateData",
      "books",
      { _id: this.details.id, status: this.details.new_status },
      (response) => {
        console.log(response);
        if (response !== null) {
          this.setState((prevState, prevProps) => {
            prevState.results[this.details.index].status =
              this.details.new_status;
            return {
              results: prevState.results,
            };
          });
          alert(response);
        }
      }
    );
  }

  deleteBook() {
    makeAPICall("removeData", "books", { _id: this.details.id }, (response) => {
      console.log(response);
      if (response !== null) {
        this.setState((prevState, prevProps) => {
          let new_results = prevState.results.filter((book) => {
            return book._id !== this.details.id;
          });
          return {
            results: new_results,
          };
        });
        alert(response);
      }
    });
  }

  componentDidMount() {
    makeAPICall("getData", "books", {}, (response) => {
      console.log(response);
      if (response !== null) {
        this.setState({
          results: response,
        });
      }
    });
  }

  render() {
    let books_array = this.state.results === null ? [] : this.state.results;

    books_array = books_array.filter(
      (book) => book.status === this.props.filter
    );

    return (
      <div>
        {this.state.modal ? (
          <SellerAlert
            alertMessage={ALERT_MESSAGE}
            continue_message={"Yes"}
            close={() => {
              this.details = null;
              this.setState({ modal: false });
            }}
            continue={() => {
              this.changeBookStatus();
              this.setState({ modal: false });
            }}
          />
        ) : null}
        {books_array.map((book, index) => {
          return (
            <BookCard
              key={index}
              info={book}
              changeBookStatus={
                book.status === "sold"
                  ? () => {}
                  : () => {
                      this.details = {
                        index: index,
                        id: book._id,
                        new_status:
                          book.status === "publish" ? "unpublish" : "publish",
                      };

                      this.setState({ modal: true });
                    }
              }
            />
          );
        })}
      </div>
    );
  }
}

export default Books;
