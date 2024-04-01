import React, { useState, useEffect } from "react";
import FetchData from "../utils/FetchData";
import BookLayout from "./BookLayout";
import BestSellerButtons from "./BestSellerButtons";

export const BooksBanner = () => {
  return (
    <div className="bookBanner">
      <div className="headBanner">
        <h1>Dont Know What To Read?</h1>
        <h2>Look No Further</h2>
      </div>
    </div>
  )
}

export const RenderBooks = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [query, setQuery] = useState("Hardcover-Fiction");

  useEffect(() => {
    const fetchBestSellers = async () => {
      const response = await FetchData(`http://localhost:4000/${query}`);
      const data = response[0];
      setBestSellers(data);
    };
    fetchBestSellers();
  }, [query]);

  const handleButtonClick = (key) => {
    setQuery(key);
  };

  return (
    <>
    <BestSellerButtons buttonClick={handleButtonClick} />
    <BookLayout booksData={bestSellers} />
    </>
  );
};


//   const [booksData, setBooksData] = useState([]);

//   useEffect(() => {
//     const fetchBook = async () => {
//     const overviewUrl = await FetchData(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API_KEY}`);
    

//     const lists = overviewUrl[0].results.lists;
//     console.log(lists);

//     const listNames = [
//       'Series Books',
//       'Hardcover Fiction',
//       'Hardcover Nonfiction',
//       'Graphic Books and Manga',
//       'Business Books'
//     ];


//     const filteredLists = lists.filter(list => listNames.includes(list.list_name));
//     console.log(filteredLists);

//     const extractedData = [];

//     filteredLists.forEach(list => {
//       const booksData = list.books.map(book => ({
//         title: book.title,
//         author: book.author,
//         book_image: book.book_image,
//         description: book.description,
//         rank: book.rank,
//         buy_Links: book.buy_links
//       }));

//       extractedData.push({
//         list_name: list.list_name,
//         books: booksData
//       });
//     });

//     setBooksData(extractedData);
//     console.log(extractedData);


//     return extractedData;
//   }
//   fetchBook();
// }, []);