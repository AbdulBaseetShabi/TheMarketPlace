import React from "react";
import "../seller.css";

import GlobalVariables from "../../../global/global-variables";

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
        >
          {book.status === "publish"
            ? "Unpublish"
            : book.status === "unpublish"
            ? "Publish"
            : "Congratulations "}
          {book.status === "sold" ? <span>&#10024;</span> : null}
        </div>
      </div>
    </div>
  );
}

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
    };
  }

  componentDidMount() {
    this.setState({
      results: GlobalVariables.BOOKS,
    });
  }

  render() {
    let books_array = this.state.results === null ? [] : this.state.results;
    if (this.props.filter !== "all") {
      books_array = books_array.filter(
        (book) => book.status === this.props.filter
      );
    }
    // books_array = books_array.slice(0, 5);
    return (
      <div>
        {books_array.map((book) => {
          return <BookCard info={book} />;
        })}
      </div>
    );
  }
}

export default Books;
