import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";

import newsImage from "../../vendor/images/newsImage.jpg";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [newsCards, setNewsCards] = React.useState([
    {image: newsImage, _id: 1, date: "2 августа, 2019", title: "«Первозданная тайга»: новый фотопроект Игоря Шпиленка", text: "Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их хранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где asdasdasdфы ввввфыфвф вфывфывфы вфывфыв фывфывфывфывфas dasdasdasdывфывфыв", source: "Афиша", keyword: "Природа"}, {image: newsImage, _id: 2, date: "2 августа, 2019", title: "Лесные огоньки: история одной фотографии", text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.", source: "Афиша", keyword: "Тайга"}, {image: newsImage, _id: 3, date: "2 августа, 2019", title: "Лесные огоньки: история одной фотографии", text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.", source: "Афиша", keyword: "Природа"}, {image: newsImage, _id: 4, date: "2 августа, 2019", title: "Лесные огоньки: история одной фотографии", text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.", source: "Афиша", keyword: "Сноватег"}, {image: newsImage, _id: 5, date: "2 августа, 2019", title: "Лесные огоньки: история одной фотографии", text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.", source: "Афиша", keyword: "Природа"}
  ])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn} newsCards={newsCards} />
        </Route>
        <ProtectedRoute
          exact
          path="/saved-news"
          loggedIn={loggedIn}
          component={SavedNews}
          newsCards={newsCards}
        />
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
