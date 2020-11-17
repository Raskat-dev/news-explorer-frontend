import React from "react";

function SuccessForm({ setPopupType, successMessage }) {
  function goToAuthorization() {
    setPopupType("authorization");
  }

  return (
    <>
      <h3 className="popup__title">{successMessage}</h3>
      <button
        className="form__link-button form__link-button_success"
        type="button"
        onClick={goToAuthorization}
      >
        Войти
      </button>
    </>
  );
}

export default SuccessForm;
