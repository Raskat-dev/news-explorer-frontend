import React from "react";
import Loader from "../Loader/Loader";
import WithoutResult from "../WithoutResult/WithoutResult";
import NewsResult from "../NewsResult/NewsResult";
import ButtonBlock from "../ButtonBlock/ButtonBlock";
import "./NewsBlock.css";

function NewsBlock({ newsCards, loggedIn, main }) {
  const [showAllCards, setShowAllCards] = React.useState(false);

  return (
    <section className="news">
      <h2 className="news__title">Результаты поиска</h2>
      <NewsResult newsCards={newsCards} showAllCards={showAllCards} loggedIn={loggedIn} main={main} />
      {!showAllCards && <ButtonBlock setShowAllCards={setShowAllCards}/>}
      {/* <Loader /> */}
      {/* <WithoutResult /> */}
    </section>
  );
}

export default NewsBlock;
