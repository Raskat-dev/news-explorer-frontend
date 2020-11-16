import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { myNewsApi } from "../../api/NewsActionApi";

import "./NewsCard.css";

function NewsCard({ news, main, saved, handleCardSave, handleCardDelete }) {
  const user = React.useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = React.useState(
    user.savedNews.find((item) => item.link === news.link) !== undefined
  );

  React.useEffect(() => {
    setIsSaved(
      user.savedNews.find((item) => item.link === news.link) !== undefined
    );
  }, [user.savedNews, news.link]);

  if (news.image == null)
    news.image =
      "https://ldaily.ua/wp-content/uploads/2017/03/df958bc1d296d0bce3981c9798d6c689.jpg";

  const newsCardButtonMainClassName = `${
    isSaved
      ? "news-card__button news-card__button_main-active"
      : "news-card__button news-card__button_main"
  }`;

  const newsCardButtonSavedClassName =
    "news-card__button news-card__button_saved";

  function handleSaveClick() {
    handleCardSave(news);
  }

  function handleDeleteClick() {
    handleCardDelete(news);
  }

  //! добавитьф ункцию клика, если main, то добавить избранное, если нет - удалить
  return (
    <li className="news-card">
      {main && (
        <button
          className={newsCardButtonMainClassName}
          onClick={handleSaveClick}
          data-title="Войдите, чтобы сохранять статьи"
          disabled={!user.loggedIn}
        />
      )}
      {saved && (
        <>
          <button
            className={newsCardButtonSavedClassName}
            onClick={handleDeleteClick}
            data-title="Убрать из сохранённых"
          />
          <div className="news-card__keyword">
            <p>{news.keyword}</p>
          </div>
        </>
      )}
      <a
        href={news.link}
        target="_blank"
        rel="noopener noreferrer"
        className="news-card__link"
      >
        <div className="news-card__image"><img alt="изображение" src={news.image} /></div>
        <div className="news-card__text-container">
          <div className="news-card__justify">
            <p className="news-card__date">{news.date}</p>
            <h4 className="news-card__title">{news.title}</h4>
            <p className="news-card__text">{news.text}</p>
          </div>
          <p className="news-card__source">{news.source}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
