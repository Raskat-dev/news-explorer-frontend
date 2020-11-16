import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import NewsBlock from "../NewsBlock/NewsBlock";
import Popup from "../Popup/Popup";
import { myNewsApi } from "../../api/NewsActionApi";

function Main({ loggedIn, savedNews, setSavedNews }) {
  const [newsSearchIsClicked, setNewsSearchIsClicked] = React.useState(false);
  const [popupIsOpened, setPopupIsOpened] = React.useState(false);
  const [onLoad, setOnLoad] = React.useState(false);
  const [onWithoutResults, setOnWithoutResults] = React.useState(false);
  const [onError, setOnError] = React.useState(false);
  const [findedNews, setFindedNews] = React.useState([]);
  const [showedNews, setShowedNews] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(3);

  function closePopup() {
    setPopupIsOpened(false);
  }

  function openPopup() {
    setPopupIsOpened(true);
  }


  function handleCardSave(news) {
    const isSaved = savedNews.some((el) => el.link === news.link);
    // * Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isSaved) {
      myNewsApi
        .add(news)
        .then((res) => {
          setSavedNews([...savedNews, res]);

        })
        .catch((err) => {
          console.log(`Ошибка ${err}.`);
        });
    } else {
      const identical = savedNews.find((n) => n.link === news.link);
      myNewsApi
        .delete(identical._id)
        .then(setSavedNews(savedNews.filter((el) => el.link !== news.link)))
        .catch((err) => {
          console.log(`Ошибка ${err}.`);
        });
    }
  }

  React.useEffect(() => {
    const news = localStorage.getItem("news");
    if (news) {
      const jsonNews = JSON.parse(news);
      setFindedNews(jsonNews);
      setShowedNews(jsonNews.slice(0, 3));
      setNewsSearchIsClicked(true);
    }
  }, []);

  return (
    <>
      <Header
        main={true}
        component={Navigation}
        loggedIn={loggedIn}
        closePopup={closePopup}
        openPopup={openPopup}
        popupIsOpened={popupIsOpened}
      />
      <SearchForm
        searchIsClicked={setNewsSearchIsClicked}
        setOnLoad={setOnLoad}
        onWithoutResults={onWithoutResults}
        setOnWithoutResults={setOnWithoutResults}
        findedNews={findedNews}
        setFindedNews={setFindedNews}
        setShowedNews={setShowedNews}
        onError={onError}
        setOnError={setOnError}
      />
      {newsSearchIsClicked && (
        <NewsBlock
          showedNews={showedNews}
          setShowedNews={setShowedNews}
          loggedIn={loggedIn}
          main={true}
          onLoad={onLoad}
          onWithoutResults={onWithoutResults}
          onError={onError}
          findedNews={findedNews}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          handleCardSave={handleCardSave}
        />
      )}
      <About />
      {popupIsOpened && <Popup isOpen={popupIsOpened} onClose={closePopup} />}
    </>
  );
}

export default Main;
