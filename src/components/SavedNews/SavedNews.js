import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import NewsCard from "../NewsCard/NewsCard";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import "../NewsResult/NewsResult.css";

function SavedNews({ loggedIn, newsCards }) {
  return (
    <>
      <Header saved={true} component={Navigation} loggedIn={loggedIn} />
      <SavedNewsHeader />
      <ul className="news-result__cards">
        {newsCards.map((newsCard) => (
          <NewsCard
            key={newsCard._id}
            newsCard={newsCard}
            loggedIn={loggedIn}
            saved={true}
          />
        ))}
        </ul>
    </>
  );
}

export default SavedNews;
