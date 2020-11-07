import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
      <i className="loader__preloader"></i>
      <p className="loader__text">Идёт поиск новостей...</p>
    </div>
  );
}

export default Loader;
