// import { useState, useEffect } from "react";
// import BookSearchContext from "./BookSearchContext";
// import FetchData from "../utils/FetchData";
// import API_KEY from "../../config";

// const SearchBooksProvider = ({ children }) => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const bestSeller = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${API_KEY}`;
    
//     const fetchBooks = async () => {
//       const response = await FetchData(bestSeller);
//         const response_data = response[0];
//         const {results} = response_data;
//         console.log(results)    
//     };
//     fetchBooks();
//   }, []);

//   let contextValues = { books, setBooks };
//   return (
//     <BookSearchContext.Provider value={contextValues}>
//       {children}
//     </BookSearchContext.Provider>
//   );
// };

// export default SearchBooksProvider;