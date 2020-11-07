import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__image" />
      <div className="about__description">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__text">
          Меня зовут Ростислав и я начинающий Frontend разработчик, окончивший курсы Яндекс.Практикум. Пишу код на React. Стараюсь делать адаптивные и понятные интерфейсы.
        </p>
        <p className="about__text">
          Умею использовать React Router, работать с API. В своих проектах использую методологию БЭМ для именования классов.
        </p>
      </div>
    </section>
  );
}

export default About;
