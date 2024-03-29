import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import API_KEY from "../../config";
import FetchData from "../utils/FetchData";
import "../css/LatestNews.css";

const LatestNews = () => {
  const [results, setResults] = useState([]);
  const [source, setSource] = useState("all");
  const [section, setSection] = useState("all");

  
  const sections = [
    "arts", "automobiles", "books", "business", "fashion", "food", "health",
    "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion",
    "politics", "realestate", "science", "sports", "sundayreview", "technology",
    "theater", "t-magazine", "travel", "upshot", "us", "world", "style", "education",
    "jobs", "parenting", "personaltech", "smarterliving", "advice", "africa", "americas",
    "asia", "australia", "canada", "europe", "middleeast", "money", "publichealth",
    "climate", "college", "culture", "elections", "energy", "environment", "espanol",
  ];

  useEffect(() => {
    const Times_API_URL = `https://api.nytimes.com/svc/news/v3/content/${source}/${section}.json?api-key=${API_KEY}`;
    
    const doFetch = async () => {
      const response = await FetchData(Times_API_URL);
      const response_data = response[0];
      const { results } = response_data;
      console.log(results);
      setResults(results);
    };
    
    doFetch();
  }, [source, section]);

  return (
    <>
      <NavBar />
      <h1 className="latestH1">This is the Latest and Greatest!</h1>
      <div className="latestContainer">
        <select className="latestLink" value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="all">All Sources</option>
          <option value="nyt">New York Times</option>
          <option value="inyt">International New York Times</option>
        </select>
        <select className="latestLink" value={section} onChange={(e) => setSection(e.target.value)}>
          <option value="all">All Sections</option>
          {sections.map((sec) => (
            <option key={sec} value={sec}>{sec.charAt(0).toUpperCase() + sec.slice(1)}</option>
          ))}
        </select>
        {results.map((article, index) => (
          <div key={index} className="latestNewsBox">
            <h3 className="latestTitle">{article.title}</h3>
            <div className="latestImgStory">
              <img src={article.multimedia?.[2]?.url} alt={article.title} className="latestStoryImg" />
            </div>
            <p className="latestAbstract">{article.abstract}</p>
            <div className="latestLinkContain">
              <a
                className="latestLinkArticle"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer className="footer"/>
    </>
  );
};

export default LatestNews;
