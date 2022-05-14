import GlobalVariables from "../../../global/global-variables";

function Book(props) {
  let book = props.info;
  return (
    <div className="book">
      <div
        className="book-image"
        style={{
          backgroundImage: `url(${
            GlobalVariables.GOOGLE_DRIVE_PREFIX + book.imageUrl
          })`,
        }}
      ></div>
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
      <label className="inline-block" style={{ textAlign: "center"}}>
      <span style={{ fontWeight: "600" }}>ISBN: </span>{book.isbn}
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
            width: "80%",
            fontWeight: "normal",
            padding: "5px 50px",
          }}
        >
          Purchase
        </div>
      </div>
    </div>
  );
}

export default Book;
