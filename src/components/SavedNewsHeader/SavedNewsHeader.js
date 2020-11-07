import React from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <div className="snh">
      <h3 className="snh__title">Сохранённые статьи</h3>
      <p className="snh__author-info">Грета, у вас 5 сохранённых статей</p>
      <p className="snh__keywords">
        По ключевым словам: <span>Природа, Тайга</span> и <span>2-м другим</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
