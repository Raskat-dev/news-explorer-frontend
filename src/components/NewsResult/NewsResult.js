import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsResult.css";

function NewsResult({ showedNews, loggedIn, main, handleCardSave }) {
  return (
    <>
      <h2 className="news__title">Результаты поиска</h2>
      <div className="news-result">
        <ul className="news-result__cards">
          {showedNews.map((news, id) => (
            <NewsCard
              key={id}
              news={news}
              loggedIn={loggedIn}
              main={main}
              handleCardSave={handleCardSave}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default NewsResult;
