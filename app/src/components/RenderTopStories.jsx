import API_KEY from "../../config";
import FetchData from "../utils/FetchData";
import { useState, useEffect } from "react";

const RenderTopStories = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const Times_API_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

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
    <div className="Container">
      {results.map((story) => (
        <div key={story.url}>
          <img src={story.multimedia?.[0]?.url} alt={story.title} />
          <h3>{story.title}</h3>
          <h3>{story.byline}</h3>
          <p>{story.abstract}</p>
          <button>
            <a className="HomeBtn" href={story.url} target="_blank">
              Read More
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default RenderTopStories;
