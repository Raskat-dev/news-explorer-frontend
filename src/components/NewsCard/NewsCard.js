import React from "react";
import "./NewsCard.css";

function NewsCard({ newsCard, loggedIn, main, saved }) {
  const [clickOnMark, setClickOnMark] = React.useState(false);
  const newsCardButtonMainClassName =
    "news-card__button news-card__button_main";
  const newsCardButtonSavedClassName =
    "news-card__button news-card__button_saved";

  // const modalMessageText = (
  //   `${main ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}`
  // )

  function handleMarkClick() {
    setClickOnMark(!clickOnMark);
  }

  //! добавитьф ункцию клика, если main, то добавить избранное, если нет - удалить

  return (
    <li className="news-card">
      <img
        className="news-card__image"
        alt="изображение"
        src={newsCard.image}
      />
      {/* <button className={`${newsCardButtonClassName} ${clickOnMark ? 'news-card__button_active' : ''}`} onClick={handleMarkClick} /> */}
      {main && (
        <button
          className={
            clickOnMark
              ? "news-card__button_main-active"
              : newsCardButtonMainClassName
          }
          onClick={handleMarkClick}
          data-title="Войдите, чтобы сохранять статьи"
        />
      )}
      {saved && (
        <>
          <button
            className={newsCardButtonSavedClassName}
            onClick={handleMarkClick}
            data-title="Убрать из сохранённых"
          />
          <div className="news-card__keyword"><p>{newsCard.keyword}</p></div>
        </>
      )}
      {/* <div className="news-card__modal-message"><p>{modalMessageText}</p></div> */}
      <div className="news-card__text-container">
        <div className="news-card__justify">
          <p className="news-card__date">{newsCard.date}</p>
          <h4 className="news-card__title">{newsCard.title}</h4>
          <p className="news-card__text">{newsCard.text}</p>
        </div>
        <p className="news-card__source">{newsCard.source}</p>
      </div>
    </li>
  );
}

export default NewsCard;
