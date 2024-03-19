import NavBar from "../components/NavBar";
import API_KEY from "../../config";
import FetchData from "../utils/FetchData";
import { useEffect, useState } from "react";

const LatestNews = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const Times_API_URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`;

    const doFetch = async () => {
      const response = await FetchData(Times_API_URL);
      const response_data = response[0];
      const { results } = response_data;
      console.log(results);
      setResults(results);
    };
    doFetch();
  }, []);
   
  return (
    <>
      <NavBar />
      <p>This is latest News</p> {/*just testing*/}
    </>
  );
};

export default LatestNews;
