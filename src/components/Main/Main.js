import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import NewsBlock from "../NewsBlock/NewsBlock";
import Popup from "../Popup/Popup";

function Main({ loggedIn, newsCards }) {
  const [newsSearchIsClicked, setNewsSearchIsClicked] = React.useState(false);
  const [popupIsOpened, setPopupIsOpened] = React.useState(false);

  function closePopup() {
    setPopupIsOpened(false);
  }

  function openPopup() {
    setPopupIsOpened(true);
  }

  return (
    <>
      <Header main={true} component={Navigation} loggedIn={loggedIn} closePopup={closePopup} openPopup={openPopup} popupIsOpened={popupIsOpened} />
      <SearchForm searchIsClicked={setNewsSearchIsClicked} />
      {newsSearchIsClicked && <NewsBlock newsCards={newsCards} loggedIn={loggedIn} main={true} />}
      <About />
      {popupIsOpened && <Popup isOpen={popupIsOpened} onClose={closePopup}/>}
    </>
  );
}

export default Main;
