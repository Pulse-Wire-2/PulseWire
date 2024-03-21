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
    <div className="topStoriesContainer">
      {results.map((story) => (
        <div key={story.url} className="newsBox">
          <div className="topCoverDiv">
            <h3 className="storyTitle">{story.title}</h3>
          </div>
          <div className="imgStory">
          <img src={story.multimedia?.[1]?.url} alt={story.title} className="storyImg"/>
          </div>
          <h3 className="author">{story.byline}</h3>
          <p className="description">{story.abstract}</p>
          <div className="linkContain">
            <button className="link">
            <a className="HomeBtn" href={story.url} target="_blank">
              Read More
            </a>
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderTopStories;
