import React from "react";
import "./SearchForm.css";

function SearchForm({ searchIsClicked }) {
  const [value, setValue] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    setValue(value);
    setIsValid(target.closest("form").checkValidity());
    console.log(value);
  };

  function clickOnSearch(e) {
    e.preventDefault();
    searchIsClicked(true);
    //добавить асинхронный запрос setNewsCards к апи
    //Сразу после начала запроса стейт searchIsClicked(true);
    // и отображается Loader
    // в случае успеха меняется стейт отображения карточек
    // в случае провала стейт, отвечающий за notFound
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
          <button className="form__button search__button" type="submit" disabled={!isValid}>
            Искать
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
