import React from "react";
import { newsApi } from "../../api/NewsApi";
import { makeDateCorrect } from "../../utils/utils";

import "./SearchForm.css";

function SearchForm({
  searchIsClicked,
  setOnLoad,
  onWithoutResults,
  setOnWithoutResults,
  onError,
  setOnError,
  setFindedNews,
  setShowedNews,
}) {
  const [value, setValue] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    setValue(value);
    setIsValid(target.closest("form").checkValidity());
  };

  function clickOnSearch(e) {
    if (onWithoutResults) setOnWithoutResults(false);
    if (onError) setOnError(false);
    e.preventDefault();
    setShowedNews([]);
    searchIsClicked(true);
    setOnLoad(true);
    newsApi
      .getNews(value)
      .then((res) => {
        if (res.totalResults === 0) setOnWithoutResults(true);
        else {
          const titleValue = value[0].toUpperCase() + value.slice(1);
          for (let i = 1; i < value.length; i++) {
            titleValue[i].toLowerCase()
          }
          const transformArray = res.articles.map((elem) => {
            return {
              date: makeDateCorrect(elem.publishedAt),
              title: elem.title,
              text: elem.description,
              source: elem.source.name,
              link: elem.url,
              image: elem.urlToImage,
              keyword: titleValue,
            };
          });
          localStorage.setItem("news", JSON.stringify(transformArray));
          setFindedNews(transformArray);
          setShowedNews(transformArray.slice(0, 3));
        }
      })
      .catch(() => setOnError(true))
      .finally(() => {
        setOnLoad(false);
      });
  }

  return (
    <section className="search__container">
      <div className="search__content">
        <h1 className="search__name">Что творится в мире?</h1>
        <p className="search__discription">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </p>
        <form className="search__form" onSubmit={clickOnSearch}>
          <input
            name="search"
            type="text"
            placeholder="Введите тему новости"
            className="search__input"
            onChange={handleChange}
            value={value}
            required
          />
          <button
            className="form__button search__button"
            type="submit"
            disabled={!isValid}
          >
            Искать
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
