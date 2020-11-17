import React from "react";
import { UserApi } from "../../api/UserApi";
import { myNewsApi } from "../../api/NewsActionApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function AuthorizationForm({
  values,
  errors,
  isValid,
  handleChange,
  setPopupType,
  resetForm,
  setErrors,
  onClose,
}) {
  const user = React.useContext(CurrentUserContext);

  function goToRegistration() {
    setPopupType("registration");
    resetForm();
  }

  function onLogin({ email, password }) {
    return UserApi
      .authorization(email, password)
      .then((res) => {
        UserApi.getCurrentUser(res.token).then((res) => {
          if (res) {
            user.setCurrentUser(res);
            user.setLoggedIn(true);
          }
        });
      })
      .then(() => onClose())
      .catch((err) => {
        setErrors({ general: err.message });
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(values);
  }

  return (
    <>
      <h3 className="popup__title">Вход</h3>
      <form
        className="form"
        id="author-container"
        method="post"
        action="#"
        name="authorization"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="form__input-field">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            id="email-input"
            className={
              errors.email
                ? "form__input form__input_isnotvalid"
                : "form__input"
            }
            type="text"
            placeholder="Введите почту"
            name="email"
            required
            onChange={handleChange}
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Неправильный формат email"
          />
          <span id="email-input-error" className="form__input-error">
            {errors.email || ""}
          </span>
        </div>
        <div className="form__input-field">
          <label htmlFor="password" className="form__label">
            Пароль
          </label>
          <input
            id="password-input"
            className={
              errors.password
                ? "form__input form__input_isnotvalid"
                : "form__input"
            }
            type="password"
            placeholder="Введите пароль"
            name="password"
            required
            onChange={handleChange}
            minLength="6"
            title="Пароль должен содержать минимум 6 символов"
          />
          <span id="password-input-error" className="form__input-error">
            {"" || errors.password}
          </span>
        </div>
        <span
          id="general-error"
          className="form__input-error form__input-error_general"
        >
          {errors.general && 'Неправильный email или пароль'}
        </span>
        <button
          className={!isValid ? "form__button_popup_disabled" : "form__button form__button_popup"}
          type="submit"
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
      <div className="form__link-container">
        <p className="form__link-or">или </p>
        <button
          className="form__link-button"
          type="button"
          onClick={goToRegistration}
        >
          Зарегистрироваться
        </button>
      </div>
    </>
  );
}

export default AuthorizationForm;
