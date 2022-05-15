import "../market.css";

function Book(props) {
  let book = props.info;
  return (
    <div className="book">
      <label
        className="inline-block"
        style={{ textAlign: "center", marginTop: "5px" }}
      >
        <span style={{ fontWeight: "bold" }}>{book.bookName}</span> | $
        {book.price}
      </label>
      <hr
        style={{
          opacity: "0.5",
          width: "80%",
          borderTop: "1px solid black",
        }}
      />
      <label className="inline-block" style={{ textAlign: "center" }}>
        <span style={{ fontWeight: "600" }}>ISBN: </span>
        {book.isbn}
      </label>
      <hr
        style={{
          opacity: "0.5",
          width: "80%",
          borderTop: "1px solid black",
        }}
      />
      <div className="tags-container">
        <label className="tag tiny-text">{book.condition}</label>
        {book.tags.map((tag) => {
          return <label className="tag tiny-text">{tag}</label>;
        })}
      </div>
      <hr
        style={{
          opacity: "0.5",
          width: "80%",
          borderTop: "1px solid black",
        }}
      />
      <div style={{ paddingBottom: "5px" }}>
        <div
          className="button"
          style={{
            backgroundColor: "#2CB67D",
            width: "100%",
            borderRadius: "0",
            fontWeight: "normal",
            padding: "5px 50px",
            bottom: "-10px",
            position: "absolute"
          }}
          onClick={() => props.purchase(book._id)}
        >
          Purchase
        </div>
      </div>
    </div>
  );
}

export default Book;
