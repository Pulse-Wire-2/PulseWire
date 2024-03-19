const BookLayout = ({ books }) => {
  return (
    <div className="BookContainer">
      {books.map((book) => {
        return (
          <div className="BookContain" key={book.url}>
            <h3>{book.book_title}</h3>
            <h3>{book.book_author}</h3>
            <p>{book.summary}</p>
            <p>{book.publication_dt}</p>
            <button><a className='ReviewBtn' href={book.url} target="_blank">Read More</a></button>
          </div>
        );
      })}
    </div>
  );
};

export default BookLayout;
