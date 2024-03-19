import NavBar from "../components/NavBar";
import API_KEY from "../../config";
import FetchData from "../utils/FetchData";
import { useEffect, useState } from "react";

const LatestNews = () => {
  const [results, setResults] = useState([]);
  const [source, setSource] = useState("all");
  const [section, setSection] = useState("all");

  useEffect(() => {
    const Times_API_URL = `https://api.nytimes.com/svc/news/v3/content/${source}/${section}.json?api-key=${API_KEY}`;

    const doFetch = async () => {
      const response = await FetchData(Times_API_URL);
      const response_data = response[0];
      const { results } = response_data;
      console.log(results);
      setResults(results);
    };

    if (source !== "all" || section !== "all") {
      doFetch();
    }
  }, [source, section]);

  return (
    <>
      <NavBar />
      <p>This is latest News</p>
      <select value={source} onChange={(e) => setSource(e.target.value)}>
        <option value="all">All Sources</option>
        <option value="nyt">New York Times</option>
        <option value="inyt">International New York Times</option>
      </select>
      <select value={section} onChange={(e) => setSection(e.target.value)}>
        <option value="all">All Sections</option>
        <option value="arts">Arts</option>
        <option value="business">Business</option>
        <option value=""></option>
      </select>
      <div>
        {results.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <img src={article.multimedia?.[0]?.url} alt={article.title} />

            <p>{article.abstract}</p>
            <button>
              <a className="HomeBtn" href={article.url} target="_blank">
                Read More
              </a>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestNews;
