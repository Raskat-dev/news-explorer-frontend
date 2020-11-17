import React from "react";
import { UserApi } from "../../api/UserApi";

function RegistrationForm({
  values,
  errors,
  isValid,
  handleChange,
  setPopupType,
  resetForm,
  setErrors,
  setSuccessMessage,
}) {

  function goToAuthorization() {
    setPopupType("authorization");
    resetForm();
  }

  function goToSucces() {
    setPopupType("success");
  }

  function onRegister({ email, password, name }) {
    return UserApi
      .register(email, password, name)
      .then((res) => {
        setSuccessMessage(res.message);
        goToSucces();
        resetForm();
      })
      .catch((err) => {
        setErrors({ general: err.message });
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onRegister(values);
  }

  return (
    <>
      <h3 className="popup__title">Регистрация</h3>
      <form
        className="form"
        id="author-container"
        method="post"
        action="#"
        name="registration"
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
        <div className="form__input-field">
          <label htmlFor="name" className="form__label">
            Имя
          </label>
          <input
            id="name-input"
            className={
              errors.name ? "form__input form__input_isnotvalid" : "form__input"
            }
            type="text"
            placeholder="Введите своё имя"
            name="name"
            required
            onChange={handleChange}
            title="Пожалуйста, укажите имя"
          />
          <span id="name-input-error" className="form__input-error">
            {"" || errors.name}
          </span>
        </div>
        {/* Если с сервера приходит ошибка монго */}
        <span
          id="general-error"
          className="form__input-error form__input-error_general"
        >
          {errors.general && 'Такой пользователь уже зарегестрирован'}
        </span>
        <button
          className={!isValid ? "form__button_popup_disabled" : "form__button form__button_popup"}
          type="submit"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className="form__link-container">
        <p className="form__link-or">или </p>
        <button
          className="form__link-button"
          type="button"
          onClick={goToAuthorization}
        >
          Войти
        </button>
      </div>
    </>
  );
}

export default RegistrationForm;
