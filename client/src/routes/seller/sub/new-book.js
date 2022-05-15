import React from "react";
import { makeAPICall } from "../../../global/global-function";
import "../seller.css";

class AddNewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      error: false,
    };
    this.submitForm = this.submitForm.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.new_book = null;
  }

  componentDidMount() {
    this.new_book = {
      bookName: "",
      tags: [],
      condition: "",
      isbn: "",
      price: "",
      imageUrl: "",
      status: "",
      sellerID: "",
      bookAuthor: "",
      buyerID: "",
      dateCreated: new Date().toISOString(),
    };
  }

  updateForm(event) {
    let key = event.target.name;
    let value = event.target.value.trim();

    if (key === "image") {
      console.log(value);
    } else if (key !== "tag") {
      this.new_book[key] = value;
    } else if (event.keyCode === 13) {
      this.setState((prevState, prevProps) => {
        let new_tags = prevState.tags.slice(0, prevState.tags.length);
        let check = new_tags.filter(
          (tag) => tag.toLowerCase() === value.toLowerCase()
        );
        if (check === null || check.length === 0) {
          new_tags.push(value);
        }
        event.target.value = "";
        return {
          tags: new_tags,
        };
      });
    }
  }

  deleteTag(value) {
    this.setState((prevState, prevProps) => {
      let updated_tags = prevState.tags.filter(
        (tag) => tag.toLowerCase() !== value.toLowerCase()
      );
      return {
        tags: updated_tags,
      };
    });
  }

  submitForm() {
    this.new_book["tags"] = this.state.tags;

    let valid = true;
    for (const [key, value] of Object.entries(this.new_book)) {
      valid = valid && this.new_book[key].length > 0;
    }

    if (valid) {
      makeAPICall("addData", "books", this.new_book, (result) => {
        console.log(result);
        if (result !== null) {
          alert("New Book Added");
        }
      });
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <div id="new-book">
        <label
          className="inline-block header-level-one"
          style={{ textAlign: "center" }}
        >
          Put a Book on the Market
        </label>
        <hr
          style={{
            opacity: "0.2",
            width: "80%",
            borderBottom: "1px solid white",
          }}
        />
        <div id="new-book-form">
          <div style={{ marginTop: "10px" }}>
            <label>Book Name: </label>
            <input
              type="text"
              name="bookName"
              placeholder="Book Name"
              onChange={this.updateForm}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>ISBN: </label>
            <input
              type="text"
              name="isbn"
              placeholder="ISBN"
              onChange={this.updateForm}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>
              Price:{" "}
              <span className="tiny-text" style={{ fontStyle: "italic" }}>
                in CAD
              </span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              min="5"
              onChange={this.updateForm}
            />
          </div>
          {/* <div>
            <label>Image: </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={this.updateForm}
            />
          </div> */}
          <div style={{ marginTop: "10px" }}>
            <label>Condition:</label>
            <div>
              <div>
                <input
                  type="radio"
                  name="condition"
                  value="new"
                  onChange={this.updateForm}
                />
                <label>New</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="condition"
                  value="used"
                  onChange={this.updateForm}
                />
                <label>Used</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="condition"
                  value="wornout"
                  onChange={this.updateForm}
                />
                <label>Wornout</label>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Status:</label>
            <div>
              <div>
                <input
                  type="radio"
                  name="status"
                  value="publish"
                  onChange={this.updateForm}
                />
                <label>Publish</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="status"
                  value="unpublish"
                  onChange={this.updateForm}
                />
                <label>Unpublish</label>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>
              Tags:{" "}
              <span className="tiny-text" style={{ fontStyle: "italic" }}>
                Add course codes and subject names
              </span>
            </label>
            <input
              type="text"
              name="tag"
              placeholder="Tag"
              onKeyDown={this.updateForm}
              style={{ marginTop: "7px" }}
            />
            {this.state.tags.map((tag, index) => {
              return (
                <div key={index} className="tiny-text tag" style={{marginTop: "5px" }}>
                  <div style={{ display: "flex" }}>
                    <label>{tag}</label>
                    <img
                      src="https://img.icons8.com/material-rounded/15/34495E/delete-sign.png"
                      style={{ cursor: "pointer" }}
                      alt="close"
                      onClick={() => {
                        this.deleteTag(tag);
                      }}
                    />
                  </div>
                </div>
              );
            })}
            {this.state.error ? (
              <label
                className="inline-block tiny-text"
                style={{ color: "#f08080" }}
              >
                All fileds are required. Ensure all fields are filled.
              </label>
            ) : null}
          </div>
          <div
            className="button"
            style={{
              backgroundColor: "#2cb67d",
              position: "absolute",
              bottom: "-70px",
              left: "25%",
            }}
            onClick={this.submitForm}
          >
            Add Book To Market
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewBook;
