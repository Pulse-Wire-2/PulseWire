const BookLayout = ({ booksData }) => {
  return (
    <div className="bookContainer">
      {booksData.map((book, index) => (
        <div key={index} className="BookLayout">
          <h3>{book.title}</h3>
          <p className="author">Author: {book.author}</p>
          <div className="imgContain">
            <img src={book.book_image} alt={book.title} className="bookImg"/>
          </div>
          <p className="description">Description: {book.description}</p>
          <p className="rank">Rank: {book.rank}</p>
          <ul className="buyLinks">
            {book.buy_links.map((link, j) => (
              <li key={j}>
                <a
                  href={link.url}
                  target="_blank"
                >
                  <div className="buyContainer">
                  <button className="buyLinks">{link.name}</button>
                  </div>
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