import React from "react";
import "./WithoutResult.css";
import notFoundPicture from "../../vendor/images/not-found.svg";

function WithoutResult() {
  return (
    <div className="without-result">
      <img className="without-result__pic" src={notFoundPicture} alt="not-found-pic"></img>
      <h3 className="without-result__title">Ничего не найдено</h3>
      <p className="without-result__text">К сожалению, по вашему запросу ничего не найдено.</p>
    </div>
  );
}

export default WithoutResult;
