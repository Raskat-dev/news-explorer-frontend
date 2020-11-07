import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsResult.css";

function NewsResult({ newsCards, showAllCards, loggedIn, main }) {
  const newsResultClassName = (
    `${showAllCards ? 'news-result__cards' : 'news-result__cards news-result__cards_hidden'}`
  );

  return (
    <div className="news-result">
      <ul className={newsResultClassName}>
      {newsCards.map((newsCard) => (
          <NewsCard
            key={newsCard._id}
            newsCard={newsCard}
            loggedIn={loggedIn}
            main={main}
          />
        ))}
      </ul>
    </div>
  );
}

export default NewsResult;
