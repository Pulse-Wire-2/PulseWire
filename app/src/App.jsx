import { Routes, Route } from "react-router-dom";
import FetchData from "./utils/FetchData";
import API_KEY from "../config";

import HomePage from "./pages/HomePage";
import LatestNews from "./pages/LatestNews";
import SearchBooks from "./pages/SearchBooks";
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

  const fetchData = async () => {
    const realTimeNews = await FetchData(newsWire);
    console.log(realTimeNews);
  };
  fetchData();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchBooks />} />
        <Route path="/Latest-News" element={<LatestNews />} />
        <Route path="*" element={<Fallback />} />
      </Routes>
    </>
  );
}

export default App;
