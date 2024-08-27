import Book from "./Book";

function List2({ bookName }) {
  return (
    <>
      <ul className="list-group">
        {bookName.map((book) => (
          <Book key={bookName} bookName={book} />
        ))}
      </ul>
    </>
  );
}
export default List2;
