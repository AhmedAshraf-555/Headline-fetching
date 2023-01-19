import React, { useState, useEffect } from "react";
import "./style.css";
  const url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=4fd0bce7cc6f4e2497b951c65df7a85e"

const ApiFetch = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setNews(data.articles);
    console.log(data.articles);
  };
  const removeNews = (title) => {
    const singleNews = news.filter(
      (meriNews) => meriNews.title !== title
    );
    setNews(singleNews);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          margin: "auto",
        }}
      >
        <h1>Headlines : {news.length}</h1>
      </div>
      <main className="news">
        {news.map((meriNews) => {
          return (
            <div className="headlines">
             <img
                src={meriNews.urlToImage}
                alt={meriNews.publishedAt}
        
              />
              <h4>{meriNews.title.substring(0, 30)}...</h4>
              <p>{meriNews.description}</p>
              <a href={meriNews.url}>
                Read more
              </a>
              <footer
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h5>{meriNews.author}</h5>
                <h5>{meriNews.titles}</h5>
                <h5>{meriNews.publishedAt}</h5>
              </footer>
              <button
                onClick={() => removeNews(meriNews.title)}
                className="removeBtn"
              >
                Remove
              </button>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default ApiFetch;
