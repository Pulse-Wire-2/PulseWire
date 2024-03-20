const BookLayout = ({ booksData }) => {
  return (
    <div>
      {booksData.map((book, index) => (
        <div key={index} className="BookLayout">
          <h3>{book.title}</h3>
          <p className="author">Author: {book.author}</p>
          <img src={book.book_image} alt={book.title} />
          <p className="description">Description: {book.description}</p>
          <p className="rank">Rank: {book.rank}</p>
          <ul className="buyLinks">
            {book.buy_links.map((link, j) => (
              <li key={j}>
                <a
                  href={link.url}
                  target="_blank"
                >
                  <button>{link.name}</button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BookLayout;