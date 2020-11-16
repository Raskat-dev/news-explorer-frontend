import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import NewsCard from "../NewsCard/NewsCard";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { myNewsApi } from "../../api/NewsActionApi";
import "../NewsResult/NewsResult.css";

function SavedNews({ loggedIn, setSavedNews }) {
  const user = React.useContext(CurrentUserContext);

  function handleCardDelete(news) {
    myNewsApi
      .delete(news._id)
      .then(setSavedNews(user.savedNews.filter((el) => el._id!== news._id)))
      .catch((err) => {
        console.log(`Ошибка ${err}.`);
      });
}

  return (
    <>
      <Header saved={true} component={Navigation} loggedIn={loggedIn} />
      <SavedNewsHeader />
      <ul className="news-result__cards">
        {user.savedNews.map((news) => (
          <NewsCard
            key={news._id}
            news={news}
            loggedIn={loggedIn}
            saved={true}
            handleCardDelete={handleCardDelete}
          />
        ))}
        </ul>
    </>
  );
}

export default SavedNews;
