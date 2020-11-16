import React from "react";
import "./ErrorResult.css";
import errorPicture from "../../vendor/images/error.svg";

function ErrorResult() {
  return (
    <div className="error-result">
      <img className="error-result__pic" src={errorPicture} alt="not-found-pic"></img>
      <h3 className="error-result__title">Во время запроса произошла ошибка</h3>
      <p className="error-result__text">Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
    </div>
  );
}

export default ErrorResult;
