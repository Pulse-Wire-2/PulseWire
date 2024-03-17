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

    const Movie_Review_URL = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${API_KEY}`;
    //https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=yourkey
    //https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=yourkey
    const Books_URL = `https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${API_KEY}`;

    const fetchData = async () => {
      const movieReview = await FetchData(Movie_Review_URL);
      const book = await FetchData(Books_URL);
      console.log(movieReview);
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