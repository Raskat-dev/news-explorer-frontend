import React from "react";
import "./ButtonBlock.css";

function ButtonBlock({ showedNews, setShowedNews, findedNews, currentIndex, setCurrentIndex }) {

  function showMorelCards() {
    setCurrentIndex(currentIndex+3);
    const newsArray = findedNews.slice(currentIndex, currentIndex + 3);

    setShowedNews([...showedNews, ...newsArray]);
  }

  return (
    <div className="button-block">
      <button className="button-block__button" onClick={showMorelCards}>
        Показать ещё
      </button>
    </div>
  );
}

export default ButtonBlock;
