import React from "react";
import "./ButtonBlock.css";

function ButtonBlock({ setShowAllCards }) {
  function showAllCards() {
    setShowAllCards(true);
  }

  return (
    <div className="button-block">
      <button className="button-block__button" onClick={showAllCards}>Показать ещё</button>
    </div>
  );
}

export default ButtonBlock;
