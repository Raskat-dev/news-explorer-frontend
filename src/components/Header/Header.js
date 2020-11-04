import React from "react";
import "./Header.css";

function Header({ component: Component, ...props }) {
  const [mobileNavIsOpened, setMobileNavIsOpened] = React.useState(false);

  function mobiNavClick() {
    if (props.popupIsOpened) {
      props.closePopup();
      setMobileNavIsOpened(false)
    }
    else {
      setMobileNavIsOpened(!mobileNavIsOpened);
    }
  }

  return (
    <>
      <header>
        <div className="header__container">
          <h3
            className={
              props.main || mobileNavIsOpened
                ? "header__name header__name_white"
                : "header__name"
            }
          >
            NewsExplorer
          </h3>
          <nav className="header__navigation">
            <Component {...props} mobileNavIsOpened={mobileNavIsOpened}/>
          </nav>
          <button
            className={`${
              mobileNavIsOpened
                ? "header__burger header__burger_opened"
                : "header__burger"
            } ${props.popupIsOpened ? "header__burger_opened" : ""} ${
              props.main || mobileNavIsOpened
                ? "header__burger_white"
                : "header__burger_black"
            }`}
            onClick={mobiNavClick}
            type="button"
          />
        </div>
        <nav
          className={
            mobileNavIsOpened
              ? "header__mobile-menu header__mobile-menu_opened"
              : "header__mobile-menu"
          }
        >
          <Component
            {...props}
            mobileNavIsOpened={mobileNavIsOpened}
            mobiNavClick={mobiNavClick}
            setMobileNavIsOpened={setMobileNavIsOpened}
          />
        </nav>
      </header>
      {mobileNavIsOpened && <div className="header__mobile-overflow" />}
    </>
  );
}

export default Header;
