import React from "react";
import "../seller.css";

class AddNewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
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
    console.log(this.new_book);
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
          <div>
            <label>Book Name: </label>
            <input
              type="text"
              name="bookName"
              placeholder="Book Name"
              onChange={this.updateForm}
            />
          </div>
          <div>
            <label>ISBN: </label>
            <input
              type="text"
              name="isbn"
              placeholder="ISBN"
              onChange={this.updateForm}
            />
          </div>
          <div>
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
          <div>
            <label>Image: </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={this.updateForm}
            />
          </div>
          <div>
            <label>Condition:</label>
            <div>
              <div>
                <input
                  type="radio"
                  name="condition"
                  value="New"
                  onChange={this.updateForm}
                />
                <label>New</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="condition"
                  value="Used"
                  onChange={this.updateForm}
                />
                <label>Used</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="condition"
                  value="Wornout"
                  onChange={this.updateForm}
                />
                <label>Wornout</label>
              </div>
            </div>
          </div>
          <div>
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
          <div>
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
            />
            {this.state.tags.map((tag, index) => {
              return (
                <div key={index} className="tiny-text tag">
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
          </div>
          <div
            className="button"
            style={{
              backgroundColor: "#2cb67d",
              position: "absolute",
              bottom: "20px",
              left: "25%",
            }}
            onClick={this.submitForm}
          >
            Create Book
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewBook;
