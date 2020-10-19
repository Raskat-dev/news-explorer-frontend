import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logout from "../../vendor/images/logout.svg";
import logoutwhite from "../../vendor/images/logoutwhite.svg";

function Navigation(props) {
  const { loggedIn, saved, main, mobileNavIsOpened } = props;

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
              Сохраненные статьи
            </NavLink>
          </li>
        )}
      </ul>
      {loggedIn && (
        <button className={main || mobileNavIsOpened ? "navigation__button navigation__button_white" : "navigation__button"}>
          Ростислав
          <img
            className="navigation__button-icon"
            src={main || mobileNavIsOpened ? logoutwhite : logout}
            alt="Иконка выхода"
          />
        </button>
      )}
      {!loggedIn && (
        <button className={main || mobileNavIsOpened ? " navigation__button_white" : "navigation__button"}>Авторизироваться</button>
      )}
    </>
  );
}

export default Navigation;
