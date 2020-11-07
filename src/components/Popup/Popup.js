import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SuccessForm from "../SuccessForm/SuccessForm";
import "./Popup.css";
import "./Form.css";

function Popup({ isOpen, onClose }) {
  const [popupType, setPopupType] = React.useState('authorization');
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    if (!event.target.validity.valid) {
      setErrors({...errors, [name]: target.title });
    }
    else setErrors({...errors, [name]: '' });
    // setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  React.useEffect(() => {
    window.addEventListener("keyup", handleEscClose, false);
    document.addEventListener("click", overlayClickClose, false);
    resetForm();
    return () => {
      window.removeEventListener("keyup", handleEscClose, false);
      document.removeEventListener("click", overlayClickClose, false);
    };
  }, [resetForm]);

  const overlay = React.useRef();

  function handleEscClose(e) {
    if (e.key === "Escape") {
      onClose();
      window.removeEventListener("keyup", handleEscClose, false);
    }
  }

  function overlayClickClose(e) {
    if (overlay.current && overlay.current === e.target) {
      onClose();
      document.removeEventListener("click", overlayClickClose, false);
    }
  }

  return (
    <div
      className={isOpen ? "popup popup_opened" : "popup"}
      ref={overlay}
    >
      <div
        className="popup__container"
      >
        <button
          className="popup__close"
          type="button"
          aria-label="закрыть"
          onClick={onClose}
        >
          <span></span>
        </button>
        {popupType === "authorization" && <AuthorizationForm handleChange={handleChange} values={values} errors={errors} isValid={isValid} setPopupType={setPopupType} />}
        {popupType === "registration" && <RegistrationForm handleChange={handleChange} values={values} errors={errors} isValid={isValid} setPopupType={setPopupType} />}
        {popupType === "success" && <SuccessForm setPopupType={setPopupType} />}
      </div>
    </div>
  );
}

export default Popup;
