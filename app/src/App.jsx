import { Routes, Route } from "react-router-dom";
import FetchData from "./utils/FetchData";
import API_KEY from "../config";

import HomePage from "./pages/HomePage";
import LatestNews from "./pages/LatestNews"
import SearchBooks from "./pages/SearchBooks"
import Fallback from "./components/Fallback";

function App() {


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

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchBooks />} />
        <Route path='/Latest-News' element={<LatestNews />} />
        <Route path="*" element={<Fallback />}/>
      </Routes>
    </>
  );
}

export default App;