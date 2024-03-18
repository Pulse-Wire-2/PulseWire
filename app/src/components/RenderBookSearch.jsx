import { useState, useEffect } from "react"
import FetchData from "../utils/FetchData";
import API_KEY from "../../config";

const RenderBookSearch = () => {
  const [strInput, setStrInput] = useState("");

      // // const Books_URL = `const apiUrl = https://api.nytimes.com/svc/books/v3/reviews.json?author=${authorName}&api-key=y=${API_KEY}`;
      // const authorName = "Stephen King";
      // const Books_URL = `https://api.nytimes.com/svc/books/v3/reviews.json?author=${authorName}&api-key=${API_KEY}`;

  useEffect(() => {
    const bestSeller = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${API_KEY}`;

    const fetchBooks = async () => {
      const response  = await FetchData(bestSeller);
      const response_data = response[0];
      const {results} = response_data;
      console.log(results) 
    };
    fetchBooks();
  }, []);

      return (
        <>
        <h1>Don't Know What to Read?</h1>
        <h2>Look no Further</h2>
        <form action="">
          <input
            type="text"
            value={strInput}
            onChange={(e) => setStrInput(e.target.value)}
          />
        </form>
        </>
      )
}

export default RenderBookSearch