import React from "react";
import "../seller.css";

class AddNewBook extends React.Component {
  render() {
    return (
      <div>
        <label
          className="inline-block header-level-one"
          style={{ textAlign: "center" }}
        >
          Put a Book on the Market
        </label>
        <hr
          style={{
            opacity: "0.5",
            width: "80%",
            borderBottom: "1px solid white",
          }}
        />
        <div id="new-book-form">
          <div>
            <label>Book Name</label>
            <input type="text" name="bookname" placeholder="Book Name" />
          </div>
          <div>
            <label>ISBN</label>
            <input type="text" name="bookname" placeholder="Book Name" />
          </div>
          <div>
            <label>Price</label>
            <input type="text" name="bookname" placeholder="Book Name" />
          </div>
          <div>
            <label>Image</label>
            <input type="file" name="bookname" placeholder="Book Name" />
          </div>
          <div>
            <label>Condition:</label>
            <div>
              <div>
                <input type="radio" name="condition" value="New" />
                <label>New</label>
              </div>
              <div>
                <input type="radio" name="condition" value="Used" />
                <label>Used</label>
              </div>
              <div>
                <input type="radio" name="condition" value="Wornout" />
                <label>Wornout</label>
              </div>
            </div>
          </div>
          <div>
            <label>Status:</label>
            <div>
              <div>
                <input type="radio" name="status" value="publish" />
                <label>Publish</label>
              </div>
              <div>
                <input type="radio" name="status" value="unpublish" />
                <label>Unpublish</label>
              </div>
            </div>
          </div>
          <div>
              <label>Tags:</label>
              <input type="text" name="tag" placeholder="Tag"/>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewBook;
