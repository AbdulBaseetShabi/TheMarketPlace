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
      <label className="inline-block">
        <span style={{ fontWeight: "bold" }}>Name: </span>
        {book.bookName}
      </label>
      <label className="inline-block">
        <span style={{ fontWeight: "bold" }}>Tags: </span>
        {book.tags.join(", ")}
      </label>
      <label className="inline-block">
        <span style={{ fontWeight: "bold" }}>Price: </span>${book.price}
      </label>
      {book.status === "sold" ? (
        <div style={{ display: "flex" }}>
          <label style={{ fontWeight: "bold" }}>Tracking No: </label>
          {book.trackingNo !== "" ? (
            <label style={{ marginLeft: "5px" }}>{book.trackingNo}</label>
          ) : (
            <input
              type="text"
              id={"tno_" + props.index}
              placeholder="Tracking No"
              style={{ width: "30%", marginLeft: "20px" }}
            ></input>
          )}

          {book.trackingNo === "" ? (
            <div
              className="button"
              style={{
                width: "20%",
                backgroundColor: "#2CB67D",
                padding: "5px",
                margin: "0",
                borderRadius: "0 5px 5px 0",
                fontWeight: "normal",
              }}
              onClick={() => {
                let value = document
                  .getElementById("tno_" + props.index)
                  .value.trim();
                props.createTrackingNo(props.index, book._id, value);
              }}
            >
              Save
            </div>
          ) : null}
        </div>
      ) : null}

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
    this.deleteBook = this.deleteBook.bind(this);
    this.createTrackingNo = this.createTrackingNo.bind(this);
    this.sendTextMessage = this.sendTextMessage.bind(this);
    this.details = null;
  }

  createTrackingNo(index, id, value) {
    makeAPICall(
      "updateData",
      "books",
      { _id: id, trackingNo: value },
      (response) => {
        console.log(response);
        if (response !== null) {
          this.setState((prevState, prevProps) => {
            this.sendTextMessage(
              prevState.results[index].buyerID,
              value,
              prevState.results[index].bookName
            );

            prevState.results[index].trackingNo = value;
            return {
              results: prevState.results,
            };
          });
        } else {
          alert("Error: check console");
        }
      }
    );
  }

  sendTextMessage(id, trackingNo, bookName) {
    makeAPICall("getData", "users", { uid: id }, (response) => {
      console.log(response);
      if (response !== null && response.length > 0) {
        makeAPICall(
          "sendMessage",
          "none",
          {
            message: `Use this number (${trackingNo}) to track your order: ${bookName}`,
            to: response[0].phone,
          },
          (response) => {
            console.log(response);
            if (response !== null) {
              alert("Sent SMS");
            } else {
              alert("Error: check console");
            }
          }
        );
      } else {
        alert("Error: check console");
      }
    });
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
        } else {
          alert("Error: check console");
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
    makeAPICall(
      "getData",
      "books",
      { sellerID: sessionStorage.getItem("tmp_user_id") },
      (response) => {
        console.log(response);
        if (response !== null) {
          this.setState({
            results: response,
          });
        }
      }
    );
  }

  render() {
    let books_array = this.state.results === null ? [] : this.state.results;

    books_array = books_array.filter(
      (book) => book.status === this.props.filter
    );

    return (
      <div className="enter-left-nofowards">
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
              index={index}
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
              delete={() => {
                this.details = {
                  index: index,
                  id: book._id,
                };
                this.deleteBook();
              }}
              createTrackingNo={this.createTrackingNo}
            />
          );
        })}
      </div>
    );
  }
}

export default Books;
