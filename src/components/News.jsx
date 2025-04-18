import { useEffect, useState } from "react";
import NewsItem from "./NewsItems";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ebbce28a71884bc0a50b8b01ef7cd0e5`;

      setTimeout(async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setArticles(data.articles || []);
        } catch (error) {
          console.error("Failed to fetch news:", error);
        }
        setLoading(false);
      }, 600);
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container top-fix">
      <h2 className="text-center mb-4 text-danger fw-bold">
        {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
        <span className="bg-warning text-white px-2 py-1 rounded">News</span>
      </h2>

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-danger" role="status"></div>
          <p className="mt-3 fw-bold">Loading {category} news...</p>
        </div>
      ) : (
        <div className="row justify-content-center">
          {articles.map((news, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <NewsItem
                title={news.title || "No Title Available"}
                description={news.description || "No description available"}
                src={
                  news.urlToImage ||
                  "https://via.placeholder.com/350x200.png?text=No+Image"
                }
                url={news.url}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
