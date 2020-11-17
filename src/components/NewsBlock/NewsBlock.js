import React from "react";
import Loader from "../Loader/Loader";
import WithoutResult from "../WithoutResult/WithoutResult";
import ErrorResult from "../ErrorResult/ErrorResult";
import NewsResult from "../NewsResult/NewsResult";
import ButtonBlock from "../ButtonBlock/ButtonBlock";
import "./NewsBlock.css";

function NewsBlock({ showedNews, setShowedNews, findedNews, loggedIn, main, onLoad, onWithoutResults, onError, currentIndex, setCurrentIndex, handleCardSave }) {

  return (
    <section className="news">
      {showedNews && !onLoad && !onWithoutResults && <NewsResult loggedIn={loggedIn} main={main} showedNews={showedNews} handleCardSave={handleCardSave} />}
      {showedNews.length !== findedNews.length && !onLoad && !onWithoutResults && <ButtonBlock showedNews={showedNews} setShowedNews={setShowedNews} findedNews={findedNews} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />}
      {onLoad && <Loader />}
      {onWithoutResults && <WithoutResult />}
      {onError && <ErrorResult />}
    </section>
  );
}

export default NewsBlock;
