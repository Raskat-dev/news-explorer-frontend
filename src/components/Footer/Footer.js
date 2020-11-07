import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import gitHubIcon from "../../vendor/images/github.svg";
import vkIcon from "../../vendor/images/vk.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020. Катюжанский Ростислав</p>
      <div className="footer__links">
        <div className="footer__text-links">
          <Link to="/" className="footer__link">
            Главная
          </Link>
          <a
            className="footer__link"
            href="https://praktikum.yandex.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс.Практикум
          </a>
        </div>
        <div>
          <a
            className="footer__icon-link"
            href="https://github.com/Raskat-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubIcon} alt="gitHub icon"></img>
          </a>
          <a
            className="footer__icon-link"
            href="https://vk.com/rostislavkat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vkIcon} alt="vk icon"></img>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
