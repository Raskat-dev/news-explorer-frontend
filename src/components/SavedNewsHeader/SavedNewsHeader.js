import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  const user = React.useContext(CurrentUserContext);

  let keywords = user.savedNews.reduce((sum, item) => {
    sum[item.keyword] = sum[item.keyword] + 1 || 1;
    return sum;
  }, {});
  keywords = Object.keys(keywords)
    .map((item) => {
      return { title: item, repeats: keywords[item] };
    })
    .sort((a, b) => b.repeats - a.repeats);

  function savedWord() {
    if (user.savedNews.length >= 5 || user.savedNews.length == 0)
      return "сохранённых статей";
    if (user.savedNews.length > 1 && user.savedNews.length < 5)
      return "сохранённые статьи";
    if (user.savedNews.length === 1) return "сохранённая статья";
  }

  return (
    <div className="snh">
      <h3 className="snh__title">Сохранённые статьи</h3>
      <p className="snh__author-info">{`${user.currentUser.name}, у вас ${
        user.savedNews.length
      } ${savedWord()}`}</p>
      {keywords.length !== 0 && <p className="snh__keywords">
      По {keywords.length > 1 ? "ключевым словам" : "ключевому слову"}:
          {keywords[0] && (
            <span>
              {" "}
              {keywords[0].title}
            </span>
          )}
          {keywords.length === 1 ? "." : keywords.length === 2 ? " и" : ","}
          {keywords[1] && (
            <span>
              {" "}
              {keywords[1].title}
            </span>
          )}
          {keywords.length <= 2 ? (keywords.length === 1 ? "" : ".") : " и "}
          {keywords[2] && (
            <span>
              {keywords.length === 3
                ? `${keywords[2].title}.`
                : `${keywords.length - 2}-м другим.`}
            </span>
          )}
      </p>}
    </div>
  );
}

export default SavedNewsHeader;
