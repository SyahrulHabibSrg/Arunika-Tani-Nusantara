import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsComponents = () => {
  const [news, setNews] = useState([]);

  // Fetch news data from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <div>
        <div className="news-grid">
          {news.map((item) => (
            <div className="news-item" key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={`http://localhost:5000${item.logo}`}
                  alt="Logo"
                  className="news-logo"
                />
                <img
                  src={`http://localhost:5000${item.thumbnail}`}
                  alt="News Thumbnail"
                  className="thumbnail"
                />
                <h3>{item.title}</h3>
                <p>{new Date(item.date).toLocaleDateString()}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsComponents;
