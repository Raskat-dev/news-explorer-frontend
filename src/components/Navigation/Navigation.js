import React from "react";
import "./Navigation.css";
import { NavLink, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logout from "../../vendor/images/logout.svg";
import logoutwhite from "../../vendor/images/logoutwhite.svg";

function Navigation({ loggedIn, saved, main, mobileNavIsOpened, openPopup, mobiNavClick }) {
  const history = useHistory();
  const user = React.useContext(CurrentUserContext);
  function openPopupA() {
    openPopup();
    if (mobileNavIsOpened) mobiNavClick();
  }

  function onSignOut() {
    localStorage.removeItem("token");
    user.setLoggedIn(false);
    history.push("/");
  }


  return (
    <>
      <ul className="navigation__list">
        <li
          className={
            main
              ? "navigation__item navigation__item_active_white"
              : "navigation__item"
          }
        >
          <NavLink exact to="/" className={main || mobileNavIsOpened ? "navigation__link navigation__link_white" : "navigation__link"}>
            Главная
          </NavLink>
        </li>
        {loggedIn && (
          <li
            className={
              saved
                ? "navigation__item navigation__item_active"
                : "navigation__item"
            }
          >
            <NavLink to="/saved-news" className={main || mobileNavIsOpened ? "navigation__link navigation__link_white" : "navigation__link"}>
              Сохранённые статьи
            </NavLink>
          </li>
        )}
      </ul>
      {loggedIn && (
        <button className={main || mobileNavIsOpened ? "navigation__button navigation__button_white" : "navigation__button"} type="button" onClick={onSignOut}>
          {user.currentUser.name}
          <img
            className="navigation__button-icon"
            src={main || mobileNavIsOpened ? logoutwhite : logout}
            alt="Иконка выхода"
          />
        </button>
      )}
      {!loggedIn && (
        <button className={main || mobileNavIsOpened ? "navigation__button navigation__button_white" : "navigation__button"} type="button" onClick={openPopupA}>Авторизироваться</button>
      )}
    </>
  );
}

export default Navigation;
