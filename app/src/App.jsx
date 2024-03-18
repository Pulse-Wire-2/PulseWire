import HomePage from "./components/HomePage";
import API_KEY from "../config";
import { useEffect } from "react";
import FetchData from "./utils/FetchData";

function App() {
  useEffect(() => {
    const Times_API_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

    const doFetch = async () => {
      const topStories = await FetchData(Times_API_URL);
      console.log(topStories);
    };
    doFetch();


    /*
    This will be the third page. It will need two inputs to fetch. 
    EndPoint: https://api.nytimes.com/svc/news/v3//content/{source}/{section}.json?api-key=yourkey
    1. Source {all, nyt, inyt}
    2. Section {50 possible list (drop down menu)}

    */
    const newsWire = `https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=${API_KEY}`;
    //https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=yourkey 
    //https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=yourkey
    
    // const Books_URL = `const apiUrl = https://api.nytimes.com/svc/books/v3/reviews.json?author=${authorName}&api-key=y=${API_KEY}`;
    const authorName = "Stephen King";
    const Books_URL = `https://api.nytimes.com/svc/books/v3/reviews.json?author=${authorName}&api-key=${API_KEY}`;

    // https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json

    const fetchData = async () => {
      const realTimeNews = await FetchData(newsWire);
      const book = await FetchData(Books_URL);
      console.log(realTimeNews);
      console.log(book);
    };
    fetchData();
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;