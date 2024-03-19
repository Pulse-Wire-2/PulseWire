import BookSearch from "./BookSearch";
import BookLayout from "./BookLayout";
import { useState, useEffect } from "react";
import FetchData from "../utils/FetchData";
import API_KEY from "../../config";

const RenderBooks = () => {
  const [authorName, setAuthorName] = useState("");
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      let data;
      if (!authorName) {
        data = await FetchData(
          `https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${API_KEY}`
        );
      } else {
        data = await FetchData(
          `https://api.nytimes.com/svc/books/v3/reviews.json?author=${authorName}&api-key=${API_KEY}`
        );
      }
      if (error) setError(error.message);
      setBooks(data[0].results);
      console.log(data[0].results);
    };

    fetchBooks();
  }, [authorName]);

  if (error) return <p>{error}</p>;

  return (
    <>
      <BookSearch onChange={setAuthorName} />
      <BookLayout books={books} />
    </>
  );
};

export default RenderBooks;

// useEffect(() => {
//   const fetchBooks = async () => {
//     try {
//       let data;
//       if (!authorName) {
//         data = await FetchData(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${API_KEY}`);
//       } else {
//         data = await FetchData(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${authorName}&api-key=${API_KEY}`);
//       }
//       setBooks(data.results);
//       setError('');
//     } catch (error) {
//       setError(error.message);
//     }
//   };
//   fetchBooks();
// }, [authorName]);

// if (error) return <p>{error}</p>;
